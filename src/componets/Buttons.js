import React from "react";
const Buttons = ({name})=> {
    return(
        <div>
            <button className="m-3 p-2 font-bold rounded-lg bg bg-gray-300">{name}</button>

        </div>
    )
}

export default Buttons;