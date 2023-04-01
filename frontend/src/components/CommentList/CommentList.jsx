
import React from 'react';

import Comment from "../Comment/Comment";

const CommentList = ({ entries }) => {


  return (
    <ul>
      {entries?.map((el) => (
        <Comment comment={el} />
      ))}
    </ul>
  );
};

export default CommentList;
//need to use key?
//key={entries.video_id}
//key={el.id}