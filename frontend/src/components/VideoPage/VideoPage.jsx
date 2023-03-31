// import RelatedVideos from "../RelatedVideos/RelatedVideos.jsx";
import VideoPlayer from "../VideoPlayer/VideoPlayer.jsx";
// import CommentList from "../CommentList/CommentList.jsx";
// import CommentForm
import { useState } from "react";
import axios from "axios";

const VideoPage = () => {
  const [videoId, setVideoId] = useState("1oG5O-ParRo");
  const [video, setVideo] = useState();
//   const [comments, setComments] = useState([]);
  async function getVideo() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=AIzaSyDeMe48DRVM1j5eWzUB5dIQtGHBDMXiRCg`
    );
    setVideo (response.data.items[0])
  }
  return (
    <div>
        <button onClick={getVideo}>Get Video</button>
      <VideoPlayer videoId={videoId} video={video} />
      {/* <CommentForm/> */}
      {/* <CommentList/>
            <RelatedVideos video={video}/> */}
    </div>
  );
};
// Use conditional rendering -
// render with token "Must be logged in to comment" vs Comment Form
export default VideoPage;
