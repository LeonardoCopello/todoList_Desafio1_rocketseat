import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons'


import { Container, Icon, ButtonIconTypeStyleProps } from './styles';

interface IProps extends TouchableOpacityProps {
    icon: keyof typeof AntDesign.glyphMap;
    type: ButtonIconTypeStyleProps
}

export const ButtonIcon = ({ icon, type = 'WHITE', ...rest }: IProps ) => {
    return (
    <Container>
        <Icon name={icon} type={type} {...rest}/>
    </Container>
  )
}

export default ButtonIcon;

