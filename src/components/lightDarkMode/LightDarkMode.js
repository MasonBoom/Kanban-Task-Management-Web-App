import React, { useState } from 'react';
import {
  Container,
  Icon,
  Switch,
} from './lightDarkMode.styles';
import light from '../../icons/light.svg';
import dark from '../../icons/dark.svg';

function LightDarkMode({mode = 'light'}) {
  const [lightMode, setLightMode] = useState(mode);
    
  const toggleMode = () => {
    if(lightMode === 'light') {
      setLightMode('dark');
    } else {
      setLightMode('light');
    }
  }
    
  return (
    <Container>
      <Icon src={light} alt="light icon"/>
      <Switch />
      <Icon src={dark} alt="dark icon"/>
    </Container>
  );
}

export default LightDarkMode;