import { useCallback, useState } from "react";

export const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("Im a modal");

  const handleModal = useCallback((content = false) => {
    setModal(Boolean(content));
    setModalContent(content);
  }, []);
  return{modal, modalContent, handleModal}
};


