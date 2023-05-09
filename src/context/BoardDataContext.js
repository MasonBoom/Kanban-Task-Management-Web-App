import React, { useState, createContext } from 'react';

const BoardDataContext = createContext();

function BoardDataContextProvider({ children }) {
  const [boardsArray, setBoardsArray] = useState([]);

  return (
    <BoardDataContext.Provider value={{ boardsArray, setBoardsArray }}>
      {children}
    </BoardDataContext.Provider>
  );
}

export { BoardDataContext, BoardDataContextProvider };
