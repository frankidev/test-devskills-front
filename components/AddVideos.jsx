import { useState, useEffect } from "react";
import axios from "axios";
import getVideoIdFromUrl from "../utils/getVideoIdFromUrl";
import VideoForm from "./VideoForm.jsx";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

const RecommendedVideos = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");
  const [videoThumbnails, setVideoThumbnails] = useState([]);

  useEffect(() => {    
    const fetchVideoThumbnails = async () => {
      const thumbnails = [];
      for (const videoId of videoList) {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyB76x8NXo8PgHhkgXUkTOyN2qDX2IPqirk&part=snippet&id=${videoId}`
          );

          const videoData = response.data.items[0].snippet;
          thumbnails.push({
            id: videoId,
            thumbnail: videoData.thumbnails.medium.url,
            title: videoData.title,
          });
        } catch (error) {
          console.error(error);
        }
      }
      setVideoThumbnails(thumbnails);
    };

    fetchVideoThumbnails();
  }, [videoList]);
  

  const addVideo = () => {    
    const videoId = getVideoIdFromUrl(videoUrl);
    if (videoId) {
      const updatedList = [...videoList, videoId];
      setVideoList(updatedList);
      setCurrentVideo(videoId);
      setVideoUrl("");
      localStorage.setItem("videoList", JSON.stringify(updatedList));
    } else {
      alert("URL de video de YouTube no válida");
    }
  }

  const removeVideo = (index) => {
  const updatedList = [...videoList];
  updatedList.splice(index, 1);
  setVideoList(updatedList);  
  localStorage.setItem("videoList", JSON.stringify(updatedList));
};

  useEffect(() => {    
    const storedVideoList = localStorage.getItem("videoList");
    if (storedVideoList) {
      const parsedList = JSON.parse(storedVideoList);
      setVideoList(parsedList);      
      if (parsedList.length > 0) {
        setCurrentVideo(parsedList[parsedList.length - 1]);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <VideoForm
          videoUrl={videoUrl}
          setVideoUrl={setVideoUrl}
          addVideo={addVideo}
        />    
    <div className="mt-8 max-w-lg">
        <VideoPlayer currentVideo={currentVideo} />  
        <VideoList
          videoThumbnails={videoThumbnails}
          setCurrentVideo={setCurrentVideo}
          removeVideo={removeVideo}
        />
    </div>
  </div>
  );
};

export default RecommendedVideos;
