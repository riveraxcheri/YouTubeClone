import RelatedVideos from "../RelatedVideos/RelatedVideos.jsx";
import VideoPlayer from "../VideoPlayer/VideoPlayer.jsx";
import CommentList from "../CommentList/CommentList.jsx";

const VideoPage = () => {
    return ( 
        <div>
            <VideoPlayer/>
            <CommentList/>
            <RelatedVideos/>
        </div>
     );
}
 // Use conditional rendering - 
 // render with token "Must be logged in to comment" vs Comment Form
export default VideoPage;