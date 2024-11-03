import { useState } from "react";

export function Card({id , name, info, image}){
    const [readMore, setReadMore]=useState(false);
    const des= readMore ? info:`${info.substring(0,19)}....`;
    function readHandle(){
        setReadMore(!readMore);
    }
    
    return (
        <>
        <div className="Card border-4  mx-4 h-100 w-60   gap-y-24 gap-x-32 border-solid">
         <div className="card gap-x-32 h-auto">
            <img src={image} alt={name} className="image h-40 w-60"></img>
           
           <div className=" "> <h1 className="name font-bold ">{name}</h1>
           
            </div>
            <div className="description">{des} <span className="readmore cursor-pointer text-sm text-blue-500"> </span></div>
           
         </div>
         </div>
        </>
    )
}