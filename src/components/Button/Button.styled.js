import styled from "styled-components";

export const ButtonWrapper = styled.button`
color : ${(props) => props.theme.colors.white};
background-color : ${(props) => props.color ? props.color : "#2563EB"};
padding: 20px 30px;
min-width: 300px;
font-size: 1.5rem;
margin: 20px;
border: none;
border-radius: 10px;
font-weight: 600;


&:hover{
    box-shadow: 0px 0px 10px ${(props) => props.theme.colors.purple} ;
    cursor: pointer;
}

  ${((props) => props.theme.media.mobile)}{
  min-width: 100px;
}
`
