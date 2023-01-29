import React from 'react';
import {
  MainContainer,
  Header,
  MainContent,
} from './mainPage.styles';
import SideBar from '../components/sideBar/SideBar';
import threeDots from '../icons/threeDots.svg';

function MainPage() {
  return (
    <MainContainer>
      <SideBar isHidden={false} />
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
  );
}

export default MainPage;
