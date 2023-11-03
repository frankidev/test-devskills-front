const VideoList = ({videoThumbnails ,setCurrentVideo, removeVideo}) => {
    return (
        <ul className="mt-4">
        {videoThumbnails.map((video, index) => (
          <li key={index} className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentVideo(video.id)}
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              Reproducir
            </button>
            <button
              onClick={() => removeVideo(index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Eliminar
            </button>
            <img src={video.thumbnail} alt={video.title} className="w-12 h-12" />
            <span className="text-gray-700">{video.title}</span>
          </li>
        ))}
      </ul>
    )
}

export default VideoList;