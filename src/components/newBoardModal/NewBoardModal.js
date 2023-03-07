import React, { useState } from 'react';
import {
  ModalContainer,
  Modal,
  NameInput,
  ColumnsInput,
  X,
  ButtonDiv,
  AddColumn,
  CreateBoard,
  GrayX,
  ColumnItem,
} from './newBoardModal.styles'
import x from '../../icons/x.svg';
import grayX from '../../icons/grayX.svg';

function NewBoardModal({ isVisible = false, onCancel }) {
  const [modalVisible, setModalVisible] = useState(isVisible);
  const [columns, setColumns] = useState([
    <ColumnItem>
      <ColumnsInput 
        type="text" 
        placeholder="e.g. To Do, In Progress, Done" 
      />
      <GrayX src={grayX} alt="grayX" />
    </ColumnItem>
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleCancel = () => {
    setModalVisible(false);
    onCancel();
  };

  const handleAddColumn = () => {
    if(columns.length < 5) {
      setColumns([...columns,
        <ColumnItem>
          <ColumnsInput 
            type="text" 
            placeholder="e.g. To Do, In Progress, Done" 
          />
          <GrayX src={grayX} alt="grayX" />
        </ColumnItem> 
      ]);
      console.log(columns)
    } else {
      alert('You can only have 5 columns per board');
    }
  }

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
          <ButtonDiv>
            <AddColumn onClick={handleAddColumn}>+ Add New Column</AddColumn>
            <CreateBoard type="submit">Create Board</CreateBoard>
          </ButtonDiv>
        </form>
      </Modal>
    </ModalContainer>
  )
}

export default NewBoardModal;
