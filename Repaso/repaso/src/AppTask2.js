import React, { useState } from "react";
import TaskList2 from "./components/taskList2/TaskList2";

const AppTask2 = () => {
  const [tasks, setTasks] = useState([
    { description: "Hacer la compra", completed: false },
    { description: "Estudiar programación", completed: true },
    { description: "Estdiar para el parcial", completed: false },
    { description: "Dar de comer a los perros", completed: false },
    { description: "Lavarme los dientes", completed: true },
  ]);
  const handleTaskCompleted = (index) => {
    const updatedTask = [...tasks];
    updatedTask[index].completed = !updatedTask[index].completed;
    setTasks(updatedTask);
  };
  return (
    <div>
      <TaskList2 tasks={tasks} onTaskCompleted={handleTaskCompleted} />
    </div>
  );
};

export default AppTask2;
