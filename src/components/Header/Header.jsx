import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkModeIcon, HeaderWrapper, LightModeIcon, LogoIcon } from "./Header.styled";
import  { useNavigate } from 'react-router-dom'



function Header() {
      const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <LogoIcon onClick={() => navigate('/')}/>

      <span onClick={() => toggleTheme()}>{theme === 'light' ? <DarkModeIcon />: <LightModeIcon />}</span>
      
      
    </HeaderWrapper>
  );
}

export default Header;
