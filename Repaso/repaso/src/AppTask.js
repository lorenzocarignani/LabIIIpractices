import React, { useState } from "react";
import TaskList from "./components/taskList/TaskList";

const AppTask = () => {
  const [tasks, setTasks] = useState([
    { description: "Hacer la compra", completed: false },
    { description: "Estudiar programación", completed: true },
    { description: "Estdiar para el parcial", completed: false },
    { description: "Dar de comer a los perros", completed: false },
    { description: "Lavarme los dientes", completed: true },
  ]);

  const handleTaskCompletion = (index) => {
    const updatedTask = [...tasks];
    updatedTask[index].completed = !updatedTask[index].completed;
    setTasks(updatedTask);
  };
  return (
    <div>
      <TaskList tasks={tasks} onTaskCompletedList={handleTaskCompletion} />
    </div>
  );
};

export default AppTask;
