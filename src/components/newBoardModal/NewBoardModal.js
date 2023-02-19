import React, { useState } from 'react';
import {
  ModalContainer,
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
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Board name" />
        <button type="submit">Create</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </ModalContainer>
  )
}

export default NewBoardModal;
