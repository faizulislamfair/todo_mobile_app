import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import Todo from './components/Todo';
import CreateTodo from './components/CreateTodo';
import { useState } from 'react';

export default function App() {

  const [todos, setTodos] = useState([]);
  const [todoContent, setTodoContent] = useState('');

  const handleAddTodo = () => {
    if (!todoContent) return;
    Keyboard.dismiss();
    setTodos((prev) => [...prev, { id: prev.length + 1, text: todoContent }]);
    setTodoContent("");
  }

  const handleDeleteTodo = (id) => {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainApp}>
        <Text style={styles.heading}>Ataraxia Todo</Text>
        <View style={styles.todos}>
          {todos.length == 0 ? (
            <Text style={styles.noTodo}>No Todos Present!</Text>
          ) : (
            todos?.map((todo, index) => (
              <Todo
                key={index}
                id={todo.id}
                text={todo.text}
                handleDeleteTodo={handleDeleteTodo}
              />
            ))
          )}
        </View>
      </View>
      <CreateTodo
        todoContent={todoContent}
        setTodoContent={setTodoContent}
        handleAddTodo={handleAddTodo}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainApp: {
    paddingTop: 40,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  todos: {

  },
  noTodo: {
    textAlign: 'center'
  }
});
