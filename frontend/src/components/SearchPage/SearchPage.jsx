import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import {KEY} from "../../localKey";
import SearchList from "../SearchList/SearchList";

//Third attempt:

const SearchPage = () => {
  const [videos, setVideos] = useState( [
    {
        "kind": "youtube#searchResult",
        "etag": "Br9Q840RX6CL-YSazoK4rCTu8EU",
        "id": {
            "kind": "youtube#video",
            "videoId": "1oG5O-ParRo"
        },
        "snippet": {
            "publishedAt": "2023-03-30T20:56:31Z",
            "channelId": "UCgMJGv4cQl8-q71AyFeFmtg",
            "title": "BAD BATCH Season 2 Finale BREAKDOWN: Ending Explained + Star Wars Easter Eggs in Episodes 15 16",
            "description": "Our BAD BATCH Season 2 Finale BREAKDOWN is here! To get your \"Somehow Palpatine Returned\" and \"Doug Foundling\" shirts ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/1oG5O-ParRo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/1oG5O-ParRo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/1oG5O-ParRo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ScreenCrush",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-30T20:56:31Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "vhTet9DwJFXn-rHdP5vxHi1kpnk",
        "id": {
            "kind": "youtube#video",
            "videoId": "dSWa75v9VQ4"
        },
        "snippet": {
            "publishedAt": "2023-03-30T21:27:26Z",
            "channelId": "UC7yRILFFJ2QZCykymr8LPwA",
            "title": "MANDALORIAN 3x05 BREAKDOWN! Every Star Wars Easter Egg You Missed!",
            "description": "The Mandalorian Season 3 Episode 5 “The Pirate\" Full Episode scene-by-scene analysis and breakdown by Erik Voss!",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/dSWa75v9VQ4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/dSWa75v9VQ4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/dSWa75v9VQ4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "New Rockstars",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-30T21:27:26Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "gICIfYA8ZR9MY6cplMyMTqSMflo",
        "id": {
            "kind": "youtube#channel",
            "channelId": "UCZGYJFUizSax-yElQaFDp5Q"
        },
        "snippet": {
            "publishedAt": "2005-08-27T17:10:49Z",
            "channelId": "UCZGYJFUizSax-yElQaFDp5Q",
            "title": "Star Wars",
            "description": "Welcome to the official Star Wars YouTube channel -- home to a galaxy of Star Wars videos including trailers, behind-the-scenes ...",
            "thumbnails": {
                "default": {
                    "url": "https://yt3.ggpht.com/NLJIsq7K-Qr7AMpHkLstcm9F_ZQzel_CYngyfJvAuBoOzyICVBlpXZzmGlMFqhD1PoV1bJwoxyk=s88-c-k-c0xffffffff-no-rj-mo"
                },
                "medium": {
                    "url": "https://yt3.ggpht.com/NLJIsq7K-Qr7AMpHkLstcm9F_ZQzel_CYngyfJvAuBoOzyICVBlpXZzmGlMFqhD1PoV1bJwoxyk=s240-c-k-c0xffffffff-no-rj-mo"
                },
                "high": {
                    "url": "https://yt3.ggpht.com/NLJIsq7K-Qr7AMpHkLstcm9F_ZQzel_CYngyfJvAuBoOzyICVBlpXZzmGlMFqhD1PoV1bJwoxyk=s800-c-k-c0xffffffff-no-rj-mo"
                }
            },
            "channelTitle": "Star Wars",
            "liveBroadcastContent": "live",
            "publishTime": "2005-08-27T17:10:49Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "YhZ_8rJavqTPNN2zPbN9xNfZO3k",
        "id": {
            "kind": "youtube#video",
            "videoId": "9i-0o5ieBLw"
        },
        "snippet": {
            "publishedAt": "2023-03-30T19:00:03Z",
            "channelId": "UCZGYJFUizSax-yElQaFDp5Q",
            "title": "The Bad Batch Finale, Ahmed Best Talks Jedi, and More!",
            "description": "This week in Star Wars, we celebrate 5 years of Solo: A Star Wars Story with Marvel Comics, meet the characters of Young Jedi ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/9i-0o5ieBLw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/9i-0o5ieBLw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/9i-0o5ieBLw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Star Wars",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-30T19:00:03Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "SpgXRr1U-Y7pvNN8VqyokxZkp2Y",
        "id": {
            "kind": "youtube#video",
            "videoId": "_F6YBwIPzmk"
        },
        "snippet": {
            "publishedAt": "2023-03-20T15:58:08Z",
            "channelId": "UCOsVSkmXD1tc6uiJ2hc0wYQ",
            "title": "Star Wars Jedi: Survivor - Official Story Trailer",
            "description": "The dark times are closing in as Cal Kestis seeks out a safe haven far from the reach of the Empire. Follow Cal and his crew's ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/_F6YBwIPzmk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/_F6YBwIPzmk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/_F6YBwIPzmk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "EA Star Wars",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-20T15:58:08Z"
        }
    }
]);
  const [searchTerm, setSearchTerm] = useState("");
  async function fetchVideos() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet`
    );
    setVideos(response.data);
  }

  useEffect(() => {
    // fetchVideos();
    // let mounted = true;
    // if (mounted) {
    //   fetchVideos();
    // }
    // return () => mounted = false;
  }, );

  return (
    <div>
      <h1>Search for Videos</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
