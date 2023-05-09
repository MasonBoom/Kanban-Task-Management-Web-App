import React, { useState, useContext } from 'react';
import {
  SideBarContainer,
  Logo,
  BoardsLabel,
  BoardContainer,
  AddBoard,
  BottomDiv,
  HideSidebar,
} from './sideBar.styles';
import LightDarkMode from '../lightDarkMode/LightDarkMode';
import NewBoardModal from '../newBoardModal/NewBoardModal';
import { BoardDataContext } from '../../context/BoardDataContext';
import logoIcon from '../../icons/mainLogo.svg';
import boardIconPurple from '../../icons/boardIconPurple.svg';
import hideSideBar from '../../icons/hideSideBar.svg';

function SideBar() {
  const [hidden, setHidden] = useState(false)
  const [visible, setVisible] = useState(null) // prevents css animations on page load
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const { boardsArray, setBoardsArray } = useContext(BoardDataContext);

  const handleCancel = () => {
    setModalIsVisible(false);
  }

  const toggleModal = () => {
    setModalIsVisible(true);
  }

  const handleCreateBoard = (newBoardData) => {
    setBoardsArray([...boardsArray, newBoardData]);
    setModalIsVisible(false);
  };

  return (
    <>
      {modalIsVisible && (
        <NewBoardModal
          isVisible={modalIsVisible}
          onCancel={handleCancel}
          onCreate={handleCreateBoard}
        />
      )}
      {hidden === false ? (
        <SideBarContainer className={visible === true ? 'visible' : ''}>
          <Logo src={logoIcon} alt="logo" />
          <BoardsLabel>All Boards ({boardsArray.length})</BoardsLabel>
          <BoardContainer>
            <AddBoard>
              <img src={boardIconPurple} alt="board icon" />
              <span onClick={toggleModal}>+ Create New Board</span>
            </AddBoard>
          </BoardContainer>
          <BottomDiv>
            <LightDarkMode />
            <HideSidebar>
              <img src={hideSideBar} alt="hide sidebar icon" />
              <span onClick={() => {
                setHidden(true)
                setVisible(false)
              }}>Hide Sidebar</span>
            </HideSidebar>
          </BottomDiv>
        </SideBarContainer>
      ) : (
        <SideBarContainer className='hidden'>
          <BottomDiv>
            <HideSidebar className='hidden'>
              <img src={hideSideBar} alt="hide sidebar icon" />
              <span 
                onClick={() => {
                  setHidden(false)
                  setVisible(true)
                }}
                >Show Sidebar</span>
            </HideSidebar>
          </BottomDiv>
        </SideBarContainer>
      )}
    </>
  );
}

export default SideBar;