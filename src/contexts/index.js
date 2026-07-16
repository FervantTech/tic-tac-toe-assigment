import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { GameContextProvider } from "./GameContext";
import { SoundEffectsContextProvider } from "./SoundEffectsContext";


function Provider({ children }) {
  return(
  <ThemeContextProvider>
    <GameContextProvider>
      <SoundEffectsContextProvider>
     {children}
     </SoundEffectsContextProvider>
      </GameContextProvider>

      </ThemeContextProvider>
)
};

export default Provider;
