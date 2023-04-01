import { useEffect } from "react";

const VideoPlayer = ({ videoId, video }) => {
  useEffect(() => {}, [videoId, video]);
  return (
    <div>
      <div>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
          frameborder="0"
        ></iframe>
      </div>
      <div>
        <h1>{video && video?.snippet.title}</h1>
      </div>
      {/* // https://www.youtube.com/embed/VIDEO_ID */}
    </div>
  );
};

export default VideoPlayer;
