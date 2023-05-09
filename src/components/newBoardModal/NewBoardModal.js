import React, { useState, useContext } from 'react';
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
import { BoardDataContext } from '../../context/BoardDataContext';
import x from '../../icons/x.svg';
import grayX from '../../icons/grayX.svg';

function NewBoardModal({ isVisible = false, onCancel, onCreate }) {
  const [modalVisible, setModalVisible] = useState(isVisible);
  const [boardName, setBoardName] = useState('');
  const [columns, setColumns] = useState([{ name: '' }]);
  const { setBoards } = useContext(BoardDataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBoardData = {
      name: boardName,
      columns: columns.map((column) => column.name),
    };
    onCreate(newBoardData);
    setModalVisible(false);
    setBoards((prevBoards) => [...prevBoards, newBoardData]);
  };

  const handleCancel = () => {
    setModalVisible(false);
    onCancel();
  };

  const handleAddColumn = () => {
    if (columns.length < 5) {
      setColumns([...columns, { name: '' }]);
    } else {
      alert('You can only have 5 columns per board');
    }
  };

  const handleColumnNameChange = (e, index) => {
    const updatedColumns = [...columns];
    updatedColumns[index].name = e.target.value;
    setColumns(updatedColumns);
  };

  return (
    <ModalContainer isVisible={modalVisible}>
      <Modal>
        <X src={x} alt="x" onClick={handleCancel} />
        <form onSubmit={handleSubmit}>
          <h1>Add New Board</h1>
          <label htmlFor="board-name">Name</label>
          <NameInput
            type="text"
            placeholder="e.g. Web Design"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
          />
          <label htmlFor="columns">Columns</label>
          {columns.map((column, index) => (
            <ColumnItem key={index}>
              <ColumnsInput
                type="text"
                placeholder="e.g. To Do, In Progress, Done"
                value={column.name}
                onChange={(e) => handleColumnNameChange(e, index)}
              />
              <GrayX src={grayX} alt="grayX" />
            </ColumnItem>
          ))}
        </form>
          <ButtonDiv>
            <AddColumn onClick={handleAddColumn}>+ Add New Column</AddColumn>
            <CreateBoard type="submit" onClick={handleSubmit}>Create Board</CreateBoard>
          </ButtonDiv>
      </Modal>
    </ModalContainer>
  );
}

export default NewBoardModal;
