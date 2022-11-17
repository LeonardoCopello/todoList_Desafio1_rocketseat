import React from 'react';
import { View } from 'react-native';
import { useTheme } from "styled-components/native";


import { Container, ContainerInfo, Title, ContainerNumber, InfoNumber  } from './styles';

interface IProps {
    valueCriadas: number
    valueConcluidas: number
}

const HeaderList = ({ valueCriadas, valueConcluidas }: IProps) => {
    const { COLORS } = useTheme();

  return (
    <Container>
        <ContainerInfo>
            <Title style={{ color: COLORS.BLUE }}>Criadas</Title>
            <ContainerNumber>
                <InfoNumber>{valueCriadas}</InfoNumber>
            </ContainerNumber>
        </ContainerInfo>
        <ContainerInfo>
            <Title style={{ color: COLORS.PURPLE }}>Concluídas</Title>
            <ContainerNumber>
                <InfoNumber>{valueConcluidas}</InfoNumber>
            </ContainerNumber>
        </ContainerInfo>
    </Container>
  )
}

export default HeaderList;