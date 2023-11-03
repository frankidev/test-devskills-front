export default function getVideoIdFromUrl(url) {
    const videoIdMatch = url.match(/(?:\?v=|\/embed\/|\/v\/|\/watch\?v=|&v=|youtu.be\/|\/embed\/|\/v\/|\/e\/|watch\?v=|&v=|embed\?v=)([^#\&\?]*).*/);
    if (videoIdMatch && videoIdMatch[1]) {
      return videoIdMatch[1];
    } else {
      return null;
    }
  }