import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar'


const SearchPage = (props) => {
    const [videos, setVideos] = useState([]);
    const [filteredVideo, filterVideos] = useState({userInput});

    async function fetchVideos(){
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key={API KEY HERE}');
        setVideos(response.data.results);
    }

    function mapVideos(){

    }

    useEffect(()=> {
        let mounted = true;
        if(mounted){
            fetchVideos();
        }
        return () => mounted = false;
    },[])

    return ( 
        <div>
            <h1>Search for Videos</h1>
            <SearchBar/>
        </div>
     );
}
 
export default SearchPage;