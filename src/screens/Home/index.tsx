import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import Header from "@components/Header";
import { Container } from "./styles";
import Input from "@components/Input";
import EmptyList from "@components/EmptyList";
import Card from "@components/Card";
import HeaderList from "@components/HeaderList";

export interface IMessage {
  checked: boolean;
  message: string | "";
}

const Home = () => {
  const [task, setTask] = useState<IMessage>({ checked: false, message: "" });
  const [taskList, setTaskList] = useState<IMessage[]>([]);

  const checkIfDistinct = (newTask: IMessage) => {
    return !taskList.some((task) => task.message === newTask.message)
  }

  return (
    <>
      <Header />
      <Container>
        <Input
          placeholder="Descrição da Tarefa"
          value={task?.message}
          onChangeText={(text) => setTask({ checked: false, message: text })}
          onPress={() => {
            console.log('apertou botão', task.message)
            if (checkIfDistinct(task) === true) {
              setTaskList([
                ...taskList,
                { checked: false, message: task.message },
              ]);
              setTask({ checked: false, message: "" });
            } else {
              alert('Esta tarefa já existe. Digite nova tarefa')
            }
          }}
        />
        <HeaderList valueCriadas={taskList.length} valueConcluidas={taskList.filter((task) => task.checked == true).length} />
        <FlatList
          contentContainerStyle={{
            marginTop: 10,
            marginLeft: 0,
            width: Dimensions.get("window").width - 32,
          }}
          data={taskList}
          keyExtractor={(item) => item.message}
          renderItem={({ item }) => (
            <Card task={item} setTaskList={setTaskList} taskList={taskList} />
          )}
          ListEmptyComponent={() => <EmptyList />}
        />

      </Container>
    </>
  );
};

export default Home;
