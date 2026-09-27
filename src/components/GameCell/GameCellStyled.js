import styled from "styled-components";

export const CellStyle = styled.button`
  display: grid;
  place-items: center;
  background-color: ${(props) => props.$isWinningCell ? props.theme.colors.yellow : props.theme.colors.board};
  color: ${(props) => props.$isWinningCell ? "#080D16" : props.theme.colors.white};
  border: none;
  width: 100%;
  min-width: 0;
  aspect-ratio: 1;
  border-radius: 10px;
  box-shadow: 3px 6px ${(props) => props.theme.colors.cream};
  svg { width: 55%; height: 55%; }
  .outlineIcon { opacity: 0; }
  &:enabled:hover {
    cursor: pointer;
    .outlineIcon { opacity: 1; }
  }
  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.purple};
    outline-offset: 3px;
    .outlineIcon { opacity: 1; }
  }
  &:disabled { cursor: default; opacity: 1; }
`;
