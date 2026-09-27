import styled from "styled-components";
import { MdPlayArrow, MdPause, MdShuffle } from "react-icons/md";

export const MusicPlayerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.secondary};
  p { width: 100%; text-align: center; }
`;

export const MusicButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.85rem;
  border: 1px solid ${(props) => props.theme.colors.cream};
  border-radius: 10px;
  background: transparent;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 0.9rem;
  cursor: pointer;
  &:hover, &:focus-visible {
    border-color: ${(props) => props.theme.colors.blue};
  }
`;

export const PlayIcon = styled(MdPlayArrow)`font-size: 1.5rem;`;
export const PauseIcon = styled(MdPause)`font-size: 1.5rem;`;
export const ShuffleIcon = styled(MdShuffle)`font-size: 1.5rem;`;
