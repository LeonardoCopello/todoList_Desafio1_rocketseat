import React from 'react';

import { Container, Clipboard, Subtitle, Title } from './styles';
import imgClipboard from '@assets/clipboard.png'

const EmptyList = () => {
  return (
    <Container>
        <Clipboard source={imgClipboard} />
        <Title>
        Você ainda não tem tarefas cadastradas
        </Title>
        <Subtitle>
        Crie tarefas e organize seus itens a fazer
        </Subtitle>
    </Container>
  )
}

export default EmptyList;