import { Trash } from "phosphor-react";
import { useState } from "react";
import { TasksProps } from "../../App";
import styles from "./style.module.css";

interface TaskProps {
  title: string;
  isComplete: boolean;
  task: TasksProps;
  handleDeleteTask: (task: TasksProps) => void;
  handleCompleteTask: (task: TasksProps) => void;
}

export function Task({
  title,
  isComplete,
  task,
  handleCompleteTask,
  handleDeleteTask,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(isComplete);

  function handleChange() {
    setIsChecked(!isChecked);
    handleCompleteTask(task);
  }

  function handle() {
    handleDeleteTask(task);
  }

  return (
    <div className={styles.task}>
      <input
        checked={isChecked}
        onChange={handleChange}
        type="checkbox"
        name="task"
        id={task.id}
      />
      <label htmlFor={task.id} title={title}>{title}</label>
      <button title="Apagar" onClick={handle}>
        <Trash size={24} />
      </button>
    </div>
  );
}
