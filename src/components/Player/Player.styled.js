import styled from "styled-components";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 0;
  text-align: center;
  h1 { font-size: clamp(1rem, 2vw, 1.5rem); overflow-wrap: anywhere; }
`;

export const AvatarWrapper = styled.div`
  div {
    display: flex;
    width: clamp(4rem, 12vw, 10rem);
    height: clamp(4rem, 12vw, 10rem);
    filter: ${(props) => props.$isPlayerActive ? "none" : "grayscale(100%)"};
  }
`;
