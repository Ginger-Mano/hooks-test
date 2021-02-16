
import './App.css';
import Artists from "./Artists"
import React, { useState, useEffect } from "react"



export default function App() {
  const [musicArtist, setMusicArtist] = useState([])

  useEffect(() => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
      .then((response) => response.json())
      .then((musicArtist) => {
        setMusicArtist(musicArtist.artists.artist);;
      });
  }, []);

  console.log(musicArtist);
  return (
    <div className="App">
      <h1>start</h1>
      <Artists musicArtist={musicArtist} />
    </div>
  )
}


