const CommentForm = (props) => {
    return ( 
        <form>
            <label>Enter Comment</label>
            <input type={text} name={props.userInput} />
        </form>
     );
}
 
export default CommentForm;