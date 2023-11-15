import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TasksProps } from "../../App";
import styles from "./style.module.css";

interface InputAddTaskProps {
  handleAddTask: (task: TasksProps) => void;
}

export function InputAddTask({ handleAddTask }: InputAddTaskProps) {
  const [newTaskInput, setNewTaskInput] = useState("");
  const newTask = {
    id: uuidv4(),
    title: newTaskInput,
    isComplete: false,
  };

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    if (newTaskInput !== "") {
      handleAddTask(newTask);
      setNewTaskInput("");
    }
  }

  function handleInputNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskInput(event.target.value);
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.addTaskContainer}>
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        name="addNewTask"
        onChange={handleInputNewTaskChange}
        value={newTaskInput}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
