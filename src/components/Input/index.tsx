import ButtonIcon from "@components/ButtonIcon";
import React, { useRef, useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, Form } from "./styles";

interface IProps extends TextInputProps {
  onPress: () => void
  onChangeText: (arg: string) => void
}


const Input = ({onPress, onChangeText, ...rest }: IProps) => {
  const { COLORS } = useTheme();
  const [focus, setFocus] = useState(false)


  return (
    <Form>
      <Container
        {...rest}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{ borderColor: focus ? COLORS.PURPLE : COLORS.GRAY_700 }}
        placeholderTextColor={COLORS.WHITE} onChangeText={onChangeText}/>
      <ButtonIcon icon="pluscircleo" type="WHITE" onPress={onPress}/>
    </Form>
  );
};

export default Input;
