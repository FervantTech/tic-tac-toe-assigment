import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  border: none;
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
  box-shadow: 5px 10px ${(props) => props.theme.colors.cream};

  .outlineIcon {
    path {
      stroke-width: 0;
    }
    circle {
      stroke-width: 0;
      transition: stroke-width 0.2s ease;
    }
  }

  &:hover {
    cursor: pointer;
    path {
      stroke-width: 2;
    }
    circle {
      stroke-width: 3;
    }
  }
`;
