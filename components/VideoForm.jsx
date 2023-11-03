const VideoForm = ({videoUrl ,setVideoUrl ,addVideo}) => {
  return (
    <div className="max-w-md p-4 border rounded-lg shadow-lg">
      <input
        type="text"
        className="w-full py-2 px-3 rounded border"
        placeholder="Inserta URL o ID de YouTube"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button
        onClick={addVideo}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Agregar
      </button>
    </div>
  );
};

export default VideoForm;