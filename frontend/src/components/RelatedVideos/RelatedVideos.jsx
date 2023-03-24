import React, { useState, useEffect } from 'react';
import axios from 'axios';


const RelatedVideos = (props) => {
    const [relatedVideos, setRelatedVideos] = useState([]);

    async function fetchRelatedVideos(){
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId={VIDEO ID HERE}&type=video&key={API KEY HERE}');
        setRelatedVideos(response.data.results);
    }

    function mapRelatedVideos(){
        return relatedVideos.map()
    }

    useEffect(()=> {
        let mounted = true;
        if(mounted){
            fetchRelatedVideos();
        }
        return ()=> mounted = false;
    }, [])

    return ( 
        <div>
            <h1>Related Videos</h1>

        </div>
     );
}
 
export default RelatedVideos;