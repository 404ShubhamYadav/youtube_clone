import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCart from "./VideoCart";

const VideoContainer = ()=>{
    const [videos, setVideos] = useState([]);
    useEffect (() => {
        getVideos();
    }, []);

    const getVideos = async () =>{
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        // console.log(json);
        setVideos(json.items);
    }
    return(
        <div className="flex flex-col p-2 ml-5 md:flex-row flex-wrap">
            {/* {videos[0] && <AddVideoCart info = {videos[0]}/>} */}
            {videos.map((video)=>(
                <Link key ={video.id} to={"/watch?v="+ video.id}><VideoCart info = {video}/></Link>
            ))}
            
        </div>
    )
}

export default VideoContainer;