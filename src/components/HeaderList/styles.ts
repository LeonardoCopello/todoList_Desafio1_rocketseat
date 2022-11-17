import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const ContainerInfo = styled.View`
    flex-direction: row;
    height: 29px;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.BLUE};

`
export const ContainerNumber = styled.View`
    width: 25px;
    height: 19px;
    margin-left: 8px;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`
export const InfoNumber = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`