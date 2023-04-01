import React, { useState } from "react";

const CommentForm = (props) => {
  const [userInput, setUserInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formValues = { 
        text: userInput };

    console.log(formValues);
    props.addNewCommentProp(formValues).then((response) => props.getComments());
  }
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div>
        <h2>Enter Comment:</h2>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <div>
        <button type="submit">Add Comment</button>
      </div>
    </form>
  );
};

export default CommentForm;
