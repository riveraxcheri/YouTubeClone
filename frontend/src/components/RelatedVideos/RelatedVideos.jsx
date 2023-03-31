import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "./localKey";

const RelatedVideos = ({video}) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  async function fetchRelatedVideos() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${video.id.videoId}&type=video&key=${KEY}&part=snippet`
    );
    setRelatedVideos(response.data.results);
  }

//   function mapRelatedVideos() {
//     return relatedVideos.map();
//   }
//   //map videos using their thumbnail (snippet)
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchRelatedVideos();
    }
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <h1>Related Videos</h1>
    </div>
  );
};

export default RelatedVideos;
