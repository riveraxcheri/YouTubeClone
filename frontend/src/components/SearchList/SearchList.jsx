import React from "react";
import VideoCard from "../VideoCard/VideoCard";

const SearchList = ({videos}) => {
    return ( 
        <div>
            {videos.map((el) =>(
                <VideoCard video={el} />
            ) )}
        </div>
     );
}
 
export default SearchList;

// export default function SearchList({ videos }) {
//   return (
//     <div>
//       {videos.map((el) => (
//         <VideoCard video={el} />
//       ))}
//     </div>
//   );
// }
