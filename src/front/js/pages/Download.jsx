import React from "react";

export const Download = () => {
    let imageData = localStorage.getItem('finale-composition');
    let img = new Image();
    img.src = imageData;
    console.log(img)

    return (
        <div id="download">
            <img src={img.src} />
        </div>
    )
}