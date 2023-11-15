import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { InputAddTask } from "./components/InputAddTask";
import { TasksContainer } from "./components/TasksContainer";

export interface TasksProps {
  id: string;
  title: string;
  isComplete: boolean;
}

export function App() {
  const initialTasks = localStorage.getItem("tasksArray")

  const [tasks, setTasks] = useState<TasksProps[]>(initialTasks ? JSON.parse(initialTasks) : [] );  
  
  useEffect(() => {
    localStorage.setItem("tasksArray", JSON.stringify(tasks))
  }, [tasks])

  function handleAddTask(task: TasksProps) {
    setTasks([...tasks, task]);
  }

  function handleCompleteTask(taskToComplete: TasksProps) {
    setTasks(
      tasks.map((task) =>
        task.id === taskToComplete.id
          ? { ...task, isComplete: !task.isComplete }
          : task
      )
    );
  }

  function handleDeleteTask(taskToDelete: TasksProps) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete.id;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <InputAddTask handleAddTask={handleAddTask} />
      <TasksContainer
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
        tasks={tasks}
      />
    </div>
  );
}
