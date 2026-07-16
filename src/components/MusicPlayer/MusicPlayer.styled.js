import styled from "styled-components";
import { MdPlayArrow,MdPause,MdShuffle } from "react-icons/md";

export const MusicPlayerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    margin-bottom: 2rem;
    position: fixed;
    bottom: 0;
    width: 100vw;

`

export const PlayIcon = styled(MdPlayArrow)`
color: ${(props) => props.theme.colors.secondary};
font-size: 3rem;
cursor: pointer;

`

export const PauseIcon = styled(MdPause)`
color: ${(props) => props.theme.colors.secondary};
font-size: 3rem;
cursor: pointer;

`

export const ShuffleIcon = styled(MdShuffle)`
color: ${(props) => props.theme.colors.secondary};
font-size: 3rem;
cursor: pointer;

`

