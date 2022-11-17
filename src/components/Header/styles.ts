import styled from "styled-components/native";

export const Container = styled.View`
    height: 173px;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const Imagem = styled.Image`
    width: 110px;
    height: 32px;
`