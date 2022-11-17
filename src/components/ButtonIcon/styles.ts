import styled from "styled-components/native";
import { AntDesign} from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'WHITE' | 'BLUE'

interface IProps {
    type: ButtonIconTypeStyleProps
}

export const Container = styled.TouchableOpacity`
    border-radius: 6px;
    width: 52px;
    height: 52px;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_DARK} ;
`;

export const Icon = styled(AntDesign).attrs<IProps>(({ theme, type }) => ({
    size: 22,
    color: type === 'WHITE' ? theme.COLORS.WHITE : theme.COLORS.BLUE

}))``