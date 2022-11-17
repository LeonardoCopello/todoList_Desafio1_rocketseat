import React from 'react';
import { Container, Imagem } from './styles';

import logoImg from '@assets/logo.png'

const Header = () => {
  return (
    <Container>
        <Imagem source={logoImg} />
    </Container>
  )
}

export default Header