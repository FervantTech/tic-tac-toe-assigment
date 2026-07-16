import { useEffect, useState } from "react";

const useSound = (url, options) => {
  const [sound, setSound] = useState(false);
  useEffect(() => {
    const audio = new Audio(url);

    audio.load();
    audio.volume = options.volume;
    setSound(audio);
  }, []);
  return () => {
     if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }
    }
    setTimeout(() => {
      sound.pause();
      sound.currentTime = 0;
    }, options.timeout)

};

export default useSound;
