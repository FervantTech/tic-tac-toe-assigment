import React, { useEffect, useRef, useState } from "react";
import { MusicPlayerWrapper, MusicButton, PlayIcon, PauseIcon, ShuffleIcon } from "./MusicPlayer.styled";
import playlist from "../../utils/MusicUtils/playlist";
import { randomizeIndex } from ".";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(() => randomizeIndex(playlist));
  const [musicError, setMusicError] = useState("");
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;
    let cancelled = false;
    player.volume = 0.1;

    if (isPlaying) {
      player.play().catch(() => {
        if (!cancelled) {
          setIsPlaying(false);
          setMusicError("Music unavailable. Try again.");
        }
      });
    } else {
      player.pause();
    }

    return () => {
      cancelled = true;
      player.pause();
    };
  }, [isPlaying, currentSong]);

  const musicHandler = () => {
    setMusicError("");
    setIsPlaying(!isPlaying);
  };

  const shuffleHandler = () => {
    setMusicError("");
    // Pick a different song from the current one.
    const nextSong = (currentSong + 1 + randomizeIndex(playlist.slice(1))) % playlist.length;
    setCurrentSong(nextSong);
  };

  return (
    <MusicPlayerWrapper>
      <MusicButton onClick={musicHandler} aria-pressed={isPlaying}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
        {isPlaying ? "Music on" : "Music off"}
      </MusicButton>
      <MusicButton onClick={shuffleHandler}>
        <ShuffleIcon /> Shuffle
      </MusicButton>
      <audio ref={playerRef} src={playlist[currentSong]} onEnded={shuffleHandler} preload="none" />
      {musicError && <p role="status">{musicError}</p>}
    </MusicPlayerWrapper>
  );
}

export default MusicPlayer;
