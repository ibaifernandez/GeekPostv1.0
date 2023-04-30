import React from "react";

export const Download = () => {
    let imageData = localStorage.getItem('finale-composition');
    let img = new Image();
    img.src = imageData;

    return (
        <div id="download">
            <img src={img.src} />
        </div>
    )
}