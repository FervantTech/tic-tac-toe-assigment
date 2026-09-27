import styled from "styled-components";

export const GameLayout = styled.main`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 33rem) minmax(0, 1fr);
  align-items: center;
  gap: 2rem;
  max-width: 85rem;
  margin: 0 auto;
  padding: 2rem 1.25rem 3rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem 0.75rem;
  }
`;

export const BoardSection = styled.section`
  min-width: 0;
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
  p { font-size: 0.9rem; margin: 0.5rem 0 1.5rem; }
  @media (max-width: 1000px) {
    grid-column: 1 / -1;
    grid-row: 2;
    width: 100%;
    max-width: 33rem;
    justify-self: center;
  }
`;

export const GameBoardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.65rem, 3vw, 1.5rem);
`;

export const GameStatus = styled.h2`
  font-family: "Space Grotesk", Arial, sans-serif;
  font-size: clamp(1.3rem, 4vw, 2rem);
`;

export const TimerText = styled.div`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.$urgent ? props.theme.colors.red : props.theme.colors.secondary};
`;
