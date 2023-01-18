import React from 'react';
import {
  MainContainer,
  Header,
  MainContent,
} from './mainPage.styles';
import SideBar from '../components/SideBar';

function MainPage() {
  return (
    <MainContainer>
      <SideBar />
      <MainContent>
        <Header>
          <h1>Board Title</h1>
        </Header>
      </MainContent>
    </MainContainer>
  );
}

export default MainPage;
