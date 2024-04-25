import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = ()=>{
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
    
    // Early Return pattern
    if (!isMenuOpen) return null;
    return(
        <div className="p-12 m-2 w-92 shadow-lg">
            <ul className="font-medium">
                <li> <Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className="font-bold">Subscription</h1>
            <ul className="font-medium">
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold">Watch Later</h1>
            <ul className="font-medium">
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            
        </div>
    )
}

export default Sidebar;