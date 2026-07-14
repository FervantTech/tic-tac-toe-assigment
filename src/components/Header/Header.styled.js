import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;

  padding: 2rem;

`;
export const LogoIcon = styled(Logo)`
  width: 4rem;
  height: 4rem;

  /* Background square */
  #rect1408 {
    fill: ${({ theme }) => theme.colors.background};
  }

  /* Everything else */
  #rect1366,
  #rect1372,
  #rect1383,
  #rect1385,
  #rect1387,
  #path1395,
  #path1406,
  #g1416 rect,
  #g1433 rect,
  #g1439 rect {
    fill: ${({ theme }) => theme.colors.text};
  }
`;

export const LightModeIcon = styled(MdOutlineLightMode)`
color: ${(props) => props.theme.colors.text};
font-size: 2rem;
cursor: pointer;
`

export const DarkModeIcon = styled(MdOutlineDarkMode)`
color: ${(props) => props.theme.colors.text};
font-size: 2rem;
cursor: pointer;
`