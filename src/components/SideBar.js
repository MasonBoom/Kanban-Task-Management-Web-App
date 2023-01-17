import React, { useState } from 'react';
import {
    SideBarContainer,
    Logo,
    BoardsLabel,
    BoardContainer,
    AddBoard,
} from './sideBar.styles';
import logoIcon from '../icons/mainLogo.svg'
import boardIconPurple from '../icons/boardIconPurple.svg'

function SideBar() {
  const [boardsArray, setBoardsArray] = useState([])

  return (
    <SideBarContainer>
      <Logo src={logoIcon} alt="logo" />
      <BoardsLabel>All Boards ({boardsArray.length})</BoardsLabel>
      <BoardContainer>
        <AddBoard>
            <img src={boardIconPurple} alt="board icon" />
            <span>+ Create New Board</span>
        </AddBoard>
      </BoardContainer>
    </SideBarContainer>
  );
}

export default SideBar;
