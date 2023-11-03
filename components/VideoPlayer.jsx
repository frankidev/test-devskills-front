const VideoPlayer = ({currentVideo}) => {
    return (
        <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
          title="Reproductor de YouTube"
          allow="autoplay"
        />
      </div>  
    )
}

export default VideoPlayer;