import React from "react";

const TaskList = ({ tasks, onTaskCompletedList }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onTaskCompletedList(index)}
            />
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
