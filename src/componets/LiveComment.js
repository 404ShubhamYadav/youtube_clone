import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice"
import { generateRandomMessages, generateRandomName } from "./Helper";

const LiveComment = () => {
    const [liveMessages, setLiveMessages] = useState("");

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // console.log("API polling");
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    messages: generateRandomMessages(20) + "🚀"
                })
            )
        }, 1500);
        return () => clearInterval(i);
    }, []);

    return (
        <>
            <div className=" h-[350px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse ">
                <div>
                    {/* Don't use indexes as key */}
                    {chatMessages.map((c, i) => (
                        <ChatMessage key={i} name={c.name} message={c.messages} />
                    ))}
                </div>
            </div>
            <form className="w-full p-2 ml-2 border border-black"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("live chat submittes", liveMessages);
                    dispatch(
                        addMessage({
                            name: "Shubham kumar Yadav",
                            messages: liveMessages
                        })
                    );
                    setLiveMessages("");
                }}>
                <input className="px-2 w-96"
                    type="text"
                    value={liveMessages}
                    onChange={(e) => {
                        setLiveMessages(e.target.value);
                    }}
                />
                <button className="px-2 mx-2 bg-green-400">Send</button>
            </form>
        </>
    );
};

export default LiveComment;