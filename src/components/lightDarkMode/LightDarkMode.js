import React, { useState } from 'react';
import {
  Container,
  Icon,
  Switch,
} from './lightDarkMode.styles';
import light from '../../icons/light.svg';
import dark from '../../icons/dark.svg';

function LightDarkMode({mode}) {
  const [lightMode, setLightMode] = useState('');
    
  const toggleMode = () => {
    if(lightMode === 'light' || lightMode === '') {
      setLightMode('dark');
      mode = 'dark'
    } else {
      setLightMode('light');
      mode = 'light'
    }
  }
    
  return (
    <Container>
      <Icon src={light} alt="light icon"/>
      <Switch>
        <div className={lightMode} onClick={toggleMode} />
      </Switch>
      <Icon src={dark} alt="dark icon"/>
    </Container>
  );
}

export default LightDarkMode;