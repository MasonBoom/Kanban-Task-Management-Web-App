import React, { useState } from 'react';
import {
  ModalContainer,
  Modal,
  NameInput,
  ColumnsInput,
  X,
  AddColumn,
  CreateBoard,
} from './newBoardModal.styles'
import x from '../../icons/x.svg';

function NewBoardModal({ isVisible = false, onCancel }) {
  const [modalVisible, setModalVisible] = useState(isVisible);
  const [columns, setColumns] = useState([<ColumnsInput type="text" placeholder="e.g. To Do, In Progress, Done" />]);

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
        <X src={x} alt="x" onClick={handleCancel} />
        <form onSubmit={handleSubmit}>
          <h1>Add New Board</h1>
          <label htmlFor="board-name">Name</label>
          <NameInput type="text" placeholder="e.g. Web Design" />
          <label htmlFor="columns">Columns</label>
          {columns}
          <AddColumn onClick={() => setColumns([...columns, <ColumnsInput type="text" placeholder="e.g. To Do, In Progress, Done" />])}>+ Add New Column</AddColumn>
          <CreateBoard type="submit">Create Board</CreateBoard>
        </form>
      </Modal>
    </ModalContainer>
  )
}

export default NewBoardModal;
