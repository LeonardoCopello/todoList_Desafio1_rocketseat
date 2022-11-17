import React, { useEffect, useState } from "react";
import theme from "src/theme";
import { Container, Content, IconRight, IconLeft } from "./styles";
import { useTheme } from "styled-components/native";
import { Text } from "react-native";
import { IMessage } from "@screens/Home";

interface IProps {
  task: IMessage;
  setTaskList: React.Dispatch<React.SetStateAction<IMessage[]>>;
  taskList: IMessage[];
}

const Card = ({ task, setTaskList, taskList }: IProps) => {
  const { COLORS } = useTheme();

  const handleDelete = (task: IMessage) => {
    const newList = taskList.filter((item) => item.message !== task.message);
    setTaskList(newList);
  };
  const handleToggleCheck = (task: IMessage) => {
    const newTaskList = taskList.map((item) => {
      if (item.message == task.message) {
        return { checked: !item.checked, message: task.message };
      } else {
        return item;
      }
    });
    setTaskList(newTaskList);
  };

  return (
    <Container style={{ borderColor: task.checked ? COLORS.GRAY_500 : COLORS.GRAY_400 }}>
      <IconLeft
        name={task.checked ? "check-circle" : "circle"}
        onPress={() => handleToggleCheck(task)}
      />
      <Content
        style={{
          textDecorationLine: task.checked ? "line-through" : "none",
          color: task.checked ? COLORS.GRAY_300 : COLORS.GRAY_100,
        }}
      >
        {task.message}
      </Content>
      <IconRight name="trash" onPress={() => handleDelete(task)} />
    </Container>
  );
};

export default Card;
