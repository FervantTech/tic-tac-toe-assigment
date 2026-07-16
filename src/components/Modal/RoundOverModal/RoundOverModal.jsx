import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.Styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { SoundEffectsContext } from "../../../contexts/SoundEffectsContext";
import { useNavigate } from "react-router-dom";

export const RoundOverModal = () => {
  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { hoverSfx, clickedSfx, completedSfx } = useContext(SoundEffectsContext);
  const { handleModal } = useContext(ModalContext);
  const navigate = useNavigate();

  return (
    <>
      <ModalHeader>
        <Title primary>
          {game.roundWinner
            ? `${game.roundWinner.name} Wins This Round`
            : "It's a draw!"}
        </Title>
      </ModalHeader>

      <ModalBody>
        <Subtitle primary>Choices will be switched now.</Subtitle>
        <Subtitle primary>
          {game.player1.name}: {game.player1.score}
        </Subtitle>
        <Subtitle primary>
          {game.player2.name}: {game.player2.score}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="grey"
          onClick={() => {
            clickedSfx();
            handleModal();
            resetBoard();
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Continue
        </Button>
        <Button
          color="purple"
          onClick={() => {
           
            restartGame();
            handleModal();
            completedSfx();
             navigate("/");
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Restart
        </Button>
      </ModalFooter>
    </>
  );
};
