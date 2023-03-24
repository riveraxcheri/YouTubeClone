import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer";
import CommentList from "../../components/CommentList";

const VideoPage = () => {
    return ( 
        <div>
            <VideoPlayer/>
            <CommentList/>
            <RelatedVideos/>
        </div>
     );
}
 
export default VideoPage;