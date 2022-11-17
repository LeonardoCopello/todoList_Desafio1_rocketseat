import styled from 'styled-components/native'
import { EvilIcons, Feather } from '@expo/vector-icons'

export const Container = styled.View`
    flex-direction: row;
    margin-bottom: 8px;
    min-height: 64px;
    max-height: 64px;
    padding: 0px 8px;
    border-width: 2px;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Content = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const IconLeft = styled(Feather).attrs(({ theme }) => ({
    size: 25,
    color: theme.COLORS.BLUE,

}))``

export const IconRight = styled(EvilIcons).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GRAY_300,

}))``