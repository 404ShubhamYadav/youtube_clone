import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice"

const Head = () => {
    const [searchQuery, setSearchQuery] = useState(" ");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    // const [onHover, setOnhover] = useState(false);

    const searchCache = useSelector(store => store.search);
    const dispatch = useDispatch();

    // API Call
    // Make API call after every key press
    // but if the difference between 2 APIs call<200ms decline the api call
    // This is debouncing
    /**
     * searchCatche = {
     * "iphone": ["iphone11, "iphone14"]
     * }
     * searchQuery = Iphone
     * */
    const getSearchSuggestions = async () => {
        console.log("API Call - " + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1])

        // update cathe
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };

    }, [searchQuery]);

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className="grid grid-flow-col p-2 shadow-lg ">
            <div className=" flex col-span-1 md:col-span-2 ">
                <img
                    onClick={() => toggleMenuHandler()}
                    className=" h-12 w-9 cursor-pointer "
                    src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=512"/>         
                <img
                    className="hidden md:block h-12 w-15 mx-2"
                    src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="logo" />
            </div>
            <div className="px-6 md:px-9 col-span-10">
                <div>
                    <input
                        className="w-2/3 border border-gray-400 p-2 rounded-l-full"
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className="border border-gray-400 px-5 py-2 rounded-r-full">
                        🔍
                    </button>
                </div>
                {showSuggestions && (
                    <div className="fixed bg-white py-2 px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100">
                        <ul>
                            {suggestions.map(s => <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100"> 🔍{s}</li>)}
                        </ul>
                    </div>
                )}
            </div>
            <div>
                <img className="col-span-1 h-8" src="https://cdn-icons-png.freepik.com/256/1077/1077114.png" alt="user Logo" />
            </div>
        </div>
    )
}
export default Head;