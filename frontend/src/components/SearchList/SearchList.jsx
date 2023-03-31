import React from "react";
import VideoCard from "../VideoCard/VideoCard";

export default function SearchList({ videos }) {
  return (
    <div>
      {videos.map((el) => (
        <VideoCard video={el} />
      ))}
    </div>
  );
}
