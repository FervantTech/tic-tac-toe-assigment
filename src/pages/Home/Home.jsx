import React from "react";

import { Title, Subtitle, Container } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Container columnBased>
        <Title>Tic Tac Toe</Title>  
        <Subtitle>Play with your friends, higher score wins!</Subtitle>
        <Button onClick={() => navigate('/game-on')} >Play Now</Button>
      </Container>
    </div>
  );
}

export default Home;
