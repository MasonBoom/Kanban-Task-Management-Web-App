import React from 'react';
import {
  MainContainer,
  Header,
  MainContent,
} from './mainPage.styles';
import SideBar from '../components/sideBar/SideBar';

function MainPage() {
  return (
    <MainContainer>
      <SideBar isHidden={false} />
      <MainContent>
        <Header>
          <h1>Board Title</h1>
        </Header>
      </MainContent>
    </MainContainer>
  );
}

export default MainPage;
