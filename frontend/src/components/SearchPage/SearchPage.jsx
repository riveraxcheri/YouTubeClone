import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import {KEY} from "../../localKey";
import SearchList from "../SearchList/SearchList";

//Third attempt:

const SearchPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  async function fetchVideos() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet`
    );
    setVideos(response.data);
  }

  useEffect(() => {
    fetchVideos();
    // let mounted = true;
    // if (mounted) {
    //   fetchVideos();
    // }
    // return () => mounted = false;
  }, );

  return (
    <div>
      <h1>Search for Videos</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <SearchList videos={videos} />
    </div>
  );
};

// Search Results appear under search bar in grid
// Set up onClick to change page to video player page

export default SearchPage;

//Second attempt:
// export default function SearchPage() {
//   const [videos, setVideos] = useState([]);

//   const fetchVideos = async (searchTerm = "Harry Potter") => {
//     let response = await axios.get(
//       `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet`
//     );
//     setVideos(response.data.results);
//   };
//First attempt:
// const SearchPage = () => {
//     const [videos, setVideos] = useState([]);
//     const [filteredVideo, filterVideos] = useState({userInput});

//     async function fetchVideos(){
//         let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${userInput}&key=${KEY}&part=snippet`);
//         setVideos(response.data.results);
//     }
