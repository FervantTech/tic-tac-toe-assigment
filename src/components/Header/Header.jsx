import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  DarkModeIcon,
  HeaderWrapper,
  LightModeIcon,
  LogoIcon,
} from "./Header.styled";
import { useNavigate } from "react-router-dom";
import { SoundEffectsContext } from "../../contexts/SoundEffectsContext";

function Header() {
  const navigate = useNavigate();
  const { hoverSfx, clickedSfx } = useContext(SoundEffectsContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <LogoIcon
        onClick={() => {
          clickedSfx();
          navigate("/");
        }}
        onMouseEnter={() => hoverSfx()}
      />

      <span
        onClick={() => {
          clickedSfx()
          toggleTheme();
        }}
        onMouseEnter={() => hoverSfx()}
      >
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </span>
    </HeaderWrapper>
  );
}

export default Header;
