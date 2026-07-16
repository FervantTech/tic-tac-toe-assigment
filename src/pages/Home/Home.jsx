import React, { useContext } from "react";

import { Title, Subtitle, Container } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SoundEffectsContext } from "../../contexts/SoundEffectsContext";

function Home() {
  const navigate = useNavigate();
  const { hoverSfx, clickedSfx } = useContext(SoundEffectsContext);
  return (
    <div>
      <Container columnBased>
        <Title>Tic Tac Toe</Title>
        <Subtitle>Play with your friends, higher score wins!</Subtitle>
        <Button
          onClick={() => {
            clickedSfx();
            navigate("/game-on");
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Play Now
        </Button>
      </Container>
    </div>
  );
}

export default Home;
