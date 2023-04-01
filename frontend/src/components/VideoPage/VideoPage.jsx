// import RelatedVideos from "../RelatedVideos/RelatedVideos.jsx";
import VideoPlayer from "../VideoPlayer/VideoPlayer.jsx";
import CommentList from "../CommentList/CommentList.jsx";
import CommentForm from "../CommentForm/CommentForm.jsx";
import { useState } from "react";
import axios from "axios";

const VideoPage = () => {
  const [videoId, setVideoId] = useState("RqzGzwTY-6w");
  const [video, setVideo] = useState();
  const [comments, setComments] = useState([]);
  //GET video for VideoPlayer
  async function getVideo() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=AIzaSyDeMe48DRVM1j5eWzUB5dIQtGHBDMXiRCg`
    );
    setVideo(response.data.items[0]);
  }
// Set Video Id
//   async function getByVideoId() {
//     let response = await axios.get(
//       `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=AIzaSyDeMe48DRVM1j5eWzUB5dIQtGHBDMXiRCg`
//     );
//     setVideoId(response.data.items.id.videoId);
//   }

  //GET comments for VideoPage
  async function getComments() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${videoId}`
    );
    setComments(response.data);
  }
  //POST comments to VideoPage
  async function addNewComment(newComment) {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/comments/",
      newComment
    );
    if (response.status === 204) {
      console.log("Comment added!");
      getComments();
    }
  }
  return (
    <div>
      <button onClick={getVideo}>Get Video</button>
      <VideoPlayer videoId={videoId} video={video} />
      <CommentForm
        addNewCommentProp={addNewComment}
        getComments={getComments}
      />
      <CommentList
        entries={comments}
      />

    </div>
  );
};
// Use conditional rendering -
// render with token "Must be logged in to comment" vs Comment Form
export default VideoPage;
