import React from 'react';
import { 
  MainContainer, 
  Header, 
  MainContent 
} from './mainPage.styles';
import SideBar from '../components/sideBar/SideBar';
import threeDots from '../icons/threeDots.svg';
import { BoardDataContextProvider } from '../context/BoardDataContext';

function App() {
  return (
    <BoardDataContextProvider>
      <MainContainer>
        <SideBar />
        <MainContent>
          <Header>
            <h1>Board Title</h1>
            <div>
              <button>+ Add New Task</button>
              <img src={threeDots} alt="three dots" />
            </div>
          </Header>
        </MainContent>
      </MainContainer>
    </BoardDataContextProvider>
  );
}

export default App;
