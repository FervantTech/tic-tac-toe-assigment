import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: min(100%, 48rem);
  max-height: 90vh;
  overflow-y: auto;
  padding: clamp(1rem, 4vw, 2.5rem);
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  text-align: center;
`;

export const ModalHeader = styled.div`
  h1 { font-size: clamp(1.6rem, 5vw, 3rem); }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  button { min-width: 0; margin: 0; padding: 1rem 1.5rem; }
`;
