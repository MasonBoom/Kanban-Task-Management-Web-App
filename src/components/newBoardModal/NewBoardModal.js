import React, { useState } from 'react';
import {
  ModalContainer,
  Modal,
} from './newBoardModal.styles'

function NewBoardModal({ isVisible = false, onCancel }) {
  const [modalVisible, setModalVisible] = useState(isVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleCancel = () => {
    setModalVisible(false);
    onCancel();
  };

  return (
    <ModalContainer isVisible={modalVisible}>
      <Modal>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Board name" />
          <button type="submit">Create</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </Modal>
    </ModalContainer>
  )
}

export default NewBoardModal;
