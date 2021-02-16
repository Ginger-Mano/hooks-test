import React from "react"

function Musicians(props) {
    console.log(props);
    // let keyArr = props.musicArtist.map(musician => Object.keys(musician.image[0]));
    // console.log(keyArr);
    return (
        <div>
            <h1>{props.musician.name}</h1>
            <h3>{props.musician.listeners}</h3>
            <h2>{props.musician.image[0].size}</h2>
        </div>
    )
}

export default Musicians