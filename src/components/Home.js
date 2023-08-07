import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/fetch.hook";
import "../components/app.css"

export default function Home() {

  const songs = [
    { id: 1, title: 'FEEL', artist: 'Davido' },
    { id: 2, title: 'JOY', artist: 'Wizkid' },
    { id: 3, title: 'INFINITY', artist: 'Olamide' },
    // Add more songs here
  ];

  const [{ apiData }] = useFetch();

  return (
    <div>
    <div className="app">
      <header className="app-header">
        <h1>Music Streaming And Artist Scouting App</h1>
      </header>
      <main className="app-main">
        <h2>Top Songs</h2>
        <ul className="song-list">
          {songs.map(song => (
            <li key={song.id} className="song">
              <div className="song-info">
                <h3>{song.title}</h3>
                <p>By {song.artist}</p>
              </div>
              <button className="play-button">Play</button>
            </li>
          ))}
        </ul>
      </main>
    </div>

    
      
     
     
    
    
    </div>
  );
}
