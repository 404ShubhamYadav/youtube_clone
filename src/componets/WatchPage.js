import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import CommentCont from "./CommentCont";
import LiveComment from "./LiveComment";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    return (
        <div className="flex flex-col w-full">
            <div className="px-5 w-full flex">
                <div>
                    <iframe
                        width="700" height="350" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                    ></iframe>
                </div>
                <div className="w-full">
                    <LiveComment/>
                </div>
            </div>
            <div><CommentCont /></div>
        </div>
    )
}

export default WatchPage;