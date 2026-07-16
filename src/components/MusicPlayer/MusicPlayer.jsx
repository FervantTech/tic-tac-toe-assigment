import React, { useContext, useEffect, useRef, useState } from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.styled";
import playlist from "../../utils/MusicUtils/playlist";
import { randomizeIndex } from ".";
import { PlayIcon, PauseIcon, ShuffleIcon } from "./MusicPlayer.styled";
import { SoundEffectsContext } from "../../contexts/SoundEffectsContext";
import {Text} from "../../styles/General.styled"

function MusicPlayer() {
  const { hoverSfx, clickedSfx } = useContext(SoundEffectsContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playlist));
  const playerRef = useRef(null);
  const [playPromise, setPlayPromise] = useState(null);

  useEffect(() => {
    console.log(playerRef.current);
    if (isPlaying) {
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      if(playerRef.current?.volume){
        playerRef.current.volume = 0.1;
      }
      return;
    }
    playerRef.current.pause();
  }, [isPlaying]);

  const shuffleHandler = async () => {
    await playPromise.then(() => {
      playerRef.current.pause();
      setIsPlaying(false);
      return;
    });
    setCurrentSong(randomizeIndex(playlist));
    setIsPlaying(true);
  };

  return (
    <div>
      <MusicPlayerWrapper>
        {isPlaying ? (
          <PauseIcon
            onMouseEnter={() => hoverSfx()}
            onClick={() => {
              clickedSfx();
              setIsPlaying(false);
            }}
          >
            pause
          </PauseIcon>
        ) : (
          <PlayIcon
            onMouseEnter={() => hoverSfx()}
            onClick={() => {
              clickedSfx();
              setIsPlaying(true);
            }}
          >
            play
          </PlayIcon>
        )}

        <ShuffleIcon
          onMouseEnter={() => hoverSfx()}
          onClick={() => {
            clickedSfx();
            shuffleHandler();
          }}
        >
          shuffle
        </ShuffleIcon>

        <audio
          ref={playerRef}
          src={playlist[currentSong]}
          onEnded={shuffleHandler}
        ></audio>
        <Text>{playlist[currentSong].split("/")[5]}</Text>
      </MusicPlayerWrapper>
    </div>
  );
}

export default MusicPlayer;
