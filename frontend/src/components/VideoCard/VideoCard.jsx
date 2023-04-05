import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div>
      <Link to= {`/video/${video.videoId}`}>
      <img src={video.snippet.thumbnails.default.url} alt="video thumbnail" />
      <h3>{video.snippet.title}</h3>
      </Link>
    </div>
  );
};

export default VideoCard;
// export default function VideoCard({ video }) {
//   return (
//     <div>
//       <img src={video.snippet.thumbnails.default} alt= "video thumbnail" />
//       <h3>{video.snippet.title}</h3>
//     </div>
//   );
// }
