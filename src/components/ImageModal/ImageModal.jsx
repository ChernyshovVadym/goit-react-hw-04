import Modal from "react-modal";

import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, url, alt }) => {
  return (
    <div className={css.div}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img src={url} alt={alt} className={css.img} />
      </Modal>
    </div>
  );
};

export default ImageModal;
