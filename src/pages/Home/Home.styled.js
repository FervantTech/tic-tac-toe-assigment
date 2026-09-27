import styled from "styled-components";

export const GameLabel = styled.p`
  color: ${(props) => props.theme.colors.blue};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  margin-bottom: 0.5rem;
`;

export const PlayerForm = styled.form`
  width: 100%;
  max-width: 34rem;
  margin-top: 2rem;
  button { min-width: 0; margin: 1.5rem 0; }
`;

export const NameFields = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const NameField = styled.label`
  flex: 1;
  min-width: 0;
  text-align: left;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1rem;
  input {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.85rem 1rem;
    border: 1px solid ${(props) => props.theme.colors.cream};
    border-radius: 10px;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1rem;
  }
  input:focus {
    outline: 2px solid ${(props) => props.theme.colors.blue};
    outline-offset: 2px;
  }
`;
