import Comment from "./Comment";


const CommentList = ({comments}) => {
    return ( 
        <div>
            {comments.map((el) => (
                <Comment comment={el} />
            )  )}
        </div>
     );
}
 
export default CommentList;