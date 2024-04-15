import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCart, { AddVideoCart } from "./VideoCart";

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
        <div className="flex flex-wrap">
            {videos[0] && <AddVideoCart info = {videos[0]}/>}
            {videos.map((video)=>(
                <Link key ={video.id} to={"/watch?v="+ video.id}><VideoCart info = {video}/></Link>
            ))}
            
        </div>
    )
}

export default VideoContainer;