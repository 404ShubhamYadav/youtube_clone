import React from "react";
import Buttons from "./Buttons";

const ButtonList = ()=>{
    return(
        <div className="flex">
            <Buttons name= "All"/>
            <Buttons name= "Games"/>
            <Buttons name= "Music"/>
            <Buttons name= "Cricket"/>
            
            <Buttons name= "News"/>
            <Buttons name="Cocking "/>
            <Buttons name="Live"/>
            
            <Buttons name="Bollywood"/>
            <Buttons name="Election"/>
            <Buttons name="Dance"/>
            <Buttons name="Carrier"/>
        </div>
    )
}

export default ButtonList;