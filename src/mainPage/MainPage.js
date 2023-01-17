import React from 'react';
import {
  MainContainer,
  Header,
} from './mainPage.styles';
import SideBar from '../components/SideBar';

function MainPage() {
  return (
    <MainContainer>
      <SideBar />
      <Header>
        <h1>Board Title</h1>
      </Header>
    </MainContainer>
  );
}

export default MainPage;
