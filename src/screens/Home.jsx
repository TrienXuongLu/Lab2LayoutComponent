/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

function Home({navigation}) {
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

    const addTask = taskText => {
      setTasks([...tasks, taskText]);
    };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button title="About Page" onPress={() => navigation.navigate('About')} />
      </SafeAreaView>
    </MainLayout>
  );
}

export default Home;
