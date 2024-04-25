import React from "react";

const commentsData = [
    {
        name: "Shubham Yadav",
        text: "I am a software engineer and will do proficient coding",
        replies: [],
    },
    {
        name: "Shubham Yadav",
        text: "I am a software engineer and will do proficient coding",
        replies: [
            {
                name: "Shubham Yadav",
                text: "I am a software engineer and will do proficient coding",
                replies: [],
            },
            {
                name: "Shubham Yadav",
                text: "I am a software engineer and will do proficient coding",
                replies: [
                    {
                        name: "Shubham Yadav",
                        text: "I am a software engineer and will do proficient coding",
                        replies: [
                            {
                                name: "Shubham Yadav",
                                text: "I am a software engineer and will do proficient coding",
                                replies: [],
                            },
                        ],
                    },
                    {
                        name: "Shubham Yadav",
                        text: "I am a software engineer and will do proficient coding",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name: "Shubham Yadav",
        text: "I am a software engineer and will do proficient coding",
        replies: [],
    },
    {
        name: "Shubham Yadav",
        text: "I am a software engineer and will do proficient coding",
        replies: [],
    },


]

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className="flex shadow-sm p-2 rounded-lg bg-gray-100 my-2">
            <img
                className="w-6 h-6"
                alt="user"
                src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
            />
            <div className="px-3 text-base">
                <p>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-black ml-5">
                <CommentList comments={comment.replies}/>
            </div>
        </div>
    ));
}
const CommentCont = () => {
    return (
        <div className=" m-5 p-2">
            <h1 className="text-2xl font-bold">Comments: </h1>
            <CommentList comments={commentsData} />
        </div>
    )
}

export default CommentCont;