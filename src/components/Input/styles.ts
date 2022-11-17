import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Form = styled.View`
    width: 100%;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -26px;
    flex-direction: row;
    `

export const Container = styled(TextInput)`
    flex: 1;
    min-height: 54px;
    max-height: 54px;
    border-radius: 6px;
    border-width: 1px;
    padding-left: 16px;

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        background-color: ${theme.COLORS.GRAY_500};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`