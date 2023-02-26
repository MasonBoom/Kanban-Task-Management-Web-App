import React, { useState } from 'react';
import {
  ModalContainer,
  Modal,
  NameInput,
  ColumnsInput,
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
          <h1>Add New Board</h1>
          <label htmlFor="board-name">Name</label>
          <NameInput type="text" placeholder="e.g. Web Design" />
          <label htmlFor="columns">Columns</label>
          <ColumnsInput type="text" placeholder="e.g. To Do, In Progress, Done" />
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </Modal>
    </ModalContainer>
  )
}

export default NewBoardModal;
