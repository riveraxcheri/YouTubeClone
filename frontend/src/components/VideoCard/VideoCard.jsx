import React from "react";

export default function VideoCard({ video }) {
  return (
    <div>
      <img src={video.snippet.thumbnails.default} />
      <h3>{video.snippet.title}</h3>
    </div>
  );
}
