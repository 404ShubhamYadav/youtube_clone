import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = ()=>{
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
    
    // Early Return pattern
    if (!isMenuOpen) return null;
    return(
        <div className="absolute bg-white md:relative p-12 m-2 w-92 shadow-lg">
            <ul className="font-large">
                <li className="p-2"> <Link to="/">🏠 Home </Link></li>
                <li className="p-2">▶️ Shorts</li>
                <li className="p-2">Subscription</li>
            </ul>
            <hr />
            <h1 className="font-bold p-1">Explore</h1>
            <ul className="font-large">
                <li className="p-2">Trending</li>
                <li className="p-2">Sports</li>
                <li className="p-2">Movies</li>
            </ul>
            <hr />
            <h1 className="font-bold p-1">You</h1>
            <ul className="font-large">
                <li className="p-2"> History</li>
                <li className="p-2">Watch Later</li>
                <li className="p-2">Playlist</li>
                <li className="p-2">Music</li>
            </ul>
            
        </div>
    )
}

export default Sidebar;