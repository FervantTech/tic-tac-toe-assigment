import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 flex-direction: ${(props) => props.$columnBased? "column": "row"};

  min-height: 70vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding:0 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;

  ${((props) => props.theme.media.mobile)}{
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

`;


export const Title = styled.h1`
  color: ${(props) => 
    props.$primary ? props.theme.colors.primary: props.theme.colors.secondary};
  font-size: 4rem;
  font-family: "Space Grotesk", Arial, sans-serif;
  font-weight: 700;
  letter-spacing: -0.03em;
  background-color: transparent;


  ${((props) => props.theme.media.mobile)}{
 font-size: clamp(2.5rem, 10vw, 4rem);
}
`
export const Subtitle = styled.h1`
  color: ${(props) => props.$primary ? props.theme.colors.primary: props.theme.colors.secondary};
  font-size: 1.5rem;
  font-family: "Inter", Arial, sans-serif;
  font-weight: 400;
  background-color: transparent;
`

export const Text = styled.p`
  color: ${(props) => props.$primary ? props.theme.colors.secondary: props.theme.colors.text};
  font-size: 1.2rem;
  background-color: transparent;
`


