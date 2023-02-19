import React, { useState } from 'react';
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
import logoIcon from '../../icons/mainLogo.svg';
import boardIconPurple from '../../icons/boardIconPurple.svg';
import hideSideBar from '../../icons/hideSideBar.svg';

function SideBar() {
  const [boardsArray, setBoardsArray] = useState([])
  const [hidden, setHidden] = useState(false)
  const [visible, setVisible] = useState(null) // prevents css animations on page load
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const handleCancel = () => {
    setModalIsVisible(false);
  }

  const toggleModal = () => {
    setModalIsVisible(true);
  }

  return (
    <>
      {modalIsVisible && <NewBoardModal isVisible={modalIsVisible} onCancel={handleCancel} />}
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
