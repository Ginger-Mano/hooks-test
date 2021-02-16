import React from "react"
import Musicians from "./Musicians"

function Artists(props) {
    console.log(props);
    const musicians = props.musicArtist.map(musician => <Musicians musician={musician} key={musician.id} />)
    return (
        <div>
            {musicians}
        </div>
    )
}
export default Artists