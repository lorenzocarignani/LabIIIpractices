import React from "react";

const TaskList2 = ({ tasks, onTaskCompleted }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              checked={task.completed}
              type="checkbox"
              onChange={() => onTaskCompleted(index)}
            />
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList2;
