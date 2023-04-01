import React from 'react';



const Comment = ({comment}) => {
    

    return ( 
        <li className='comment_list'>
            <p>{comment.user.username}</p>
            <p> {comment && comment?.text} </p>
        </li>
     );
};
 
export default Comment;