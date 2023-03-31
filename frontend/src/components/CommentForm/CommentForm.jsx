

const CommentForm = ({userInput}) => {
    return ( 
        <form>
            <label>Enter Comment</label>
            <input type={text} name={userInput} />
        </form>
     );
}
 
export default CommentForm;