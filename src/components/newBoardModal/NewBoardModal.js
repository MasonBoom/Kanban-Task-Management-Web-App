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

  const Column = ({ index, value }) => {
    const [inputValue, setInputValue] = useState('');

    const removeItem = (index) => {
      if(columns.length > 1) {
        columns.splice(index, 1);
        setColumns([...columns]);
      }
    }

    const handleChange = (e) => {
      setInputValue(e.target.value);
      value = inputValue
    }

    return (
      <ColumnItem>
        <ColumnsInput 
          type="text" 
          placeholder="e.g. To Do, In Progress, Done" 
          onChange={handleChange} 
          value={inputValue}
        />
        <GrayX src={grayX} alt="grayX" onClick={removeItem} />
      </ColumnItem>
    )
  }

  const [modalVisible, setModalVisible] = useState(isVisible);
  const [columns, setColumns] = useState([<Column />]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleCancel = () => {
    setModalVisible(false);
    onCancel();
  };

  const handleAddColumn = () => {
    if(columns.length < 5) {
      setColumns([...columns, <Column />]);
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
          {
            columns.map((column, i) => {
              return (
                <Column index={i} />
              )
            })
          }
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
