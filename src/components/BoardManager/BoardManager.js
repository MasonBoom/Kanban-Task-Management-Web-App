import React, { useState } from 'react';
import NewBoardModal from './NewBoardModal';

function BoardManager() {
  const [boardData, setBoardData] = useState(null);

  const handleBoardCreate = (newBoardData) => {
    setBoardData(newBoardData);
  }

  return (
    <>
      <NewBoardModal onCreate={handleBoardCreate} />
    </>
  );
}

export default BoardManager;