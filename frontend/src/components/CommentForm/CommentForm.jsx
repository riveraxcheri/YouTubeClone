import React, { useContext,useEffect, useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";
// import AuthContext from "../../context/AuthContext";
// import { Link } from "react-router-dom";

const CommentForm = ({addNewComment, getComments}) => {
  const [userInput, setUserInput] = useState("");
  // const { isServerError } = useContext(AuthContext);
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    userInput, 
    setUserInput);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formValues = { 
  //       text: userInput };

  //   console.log(formValues);
  //   props.addNewCommentProp(formValues).then((response) => props.getComments());
  // }
  // useEffect(() => {
  //   if (isServerError) {
  //     reset();
  //   }
  // }, [isServerError]);

  return (
    <div className="container">
      <form className="comment_form" onSubmit={handleSubmit}>
        <label>
          Enter Comment: {" "}
          <input type={"text"}
          name={"userInput"}
          value={formData.userInput}
          onChange={handleInputChange}/>
        </label>
        <button onClick={addNewComment(setUserInput).then(getComments())} >Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
    // <form onSubmit={(event) => handleSubmit(event)}>
    //   <div>
    //     <h2>Enter Comment:</h2>
    //   </div>
    //   <input
    //     type="text"
    //     value={userInput}
    //     onChange={(event) => setUserInput(event.target.value)}
    //   />
    //   <div>
    //     <button type="submit">Add Comment</button>
    //   </div>
    // </form>
// register
    // {isServerError ? (
    //   <p className="error">Must be logged in to comment!</p>
    // ) : null}
    // <Link to="/register">Click to register!</Link>
    // <button>Login!</button>