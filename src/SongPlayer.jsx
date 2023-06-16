import React, { useRef } from 'react';
import song from './music/feliz-cumple-lupita.mp3';

const SongPlayer = () => {
    const audioRef = useRef(null);
  
    const handlePlay = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };
  
    const margen = {
        margin: '20px'
    }
    return (
      <div style={margen}>
        <audio ref={audioRef} controls onClick={handlePlay}>
          <source src={song} type="audio/mp3" />
          Tu navegador no admite la reproducción de audio.
        </audio>
      </div>
    );
  };
  
  export default SongPlayer;