import { useState } from "react";

export default function NotifItem ({imageUrl, alt, commentName, text, text1, time}) {

    const [hideStatus, setHideStatus] = useState(true);
    const [changeBackground, setChangeBackground] = useState(true);
    // const [showMessage, setShowMessage] =useState(false);


    return (
        <div className={changeBackground ? "grid-item" : "grid-color"} 
                onClick={() => {setChangeBackground(false); setHideStatus(false)}}        
            >
            <img src={imageUrl} alt={alt}/>
            <div>
                <p><span> {commentName}</span> {text1} <span>{text}</span></p>
                <p>{time}</p>
            </div>
            <div className={hideStatus ? "status" : ""}></div>
        </div>
    )
} 

