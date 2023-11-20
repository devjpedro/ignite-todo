import { Reorder } from "framer-motion";
import { ClipboardText } from "phosphor-react";
import { TasksProps } from "../../App";
import { Task } from "../Task";
import styles from "./style.module.css";

interface TasksContainer {
  tasks: TasksProps[];
  handleDeleteTask: (task: TasksProps) => void;
  handleCompleteTask: (task: TasksProps) => void;
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>
}

export function TasksContainer({
  tasks,
  setTasks,
  handleCompleteTask,
  handleDeleteTask,
  
}: TasksContainer) {
  const amountTasks = tasks.length;

  const tarefasConcluidas = tasks.reduce((total, tarefa) => {
    if (tarefa.isComplete) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);

  return (
    <main className={styles.taskContainer}>
      <header>
        <span className={styles.allTasks}>
          Tarefas criadas <strong>{amountTasks}</strong>
        </span>
        <span className={styles.completedTasks}>
          Concluídas{" "}
          <strong>
            {tarefasConcluidas} de {amountTasks}
          </strong>
        </span>
      </header>
      <div className={styles.tasks}>
        {tasks.length === 0 && (
          <div className={styles.noTasks}>
            <ClipboardText size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
          <Reorder.Group axis="y" values={tasks} onReorder={setTasks} className={styles.tasks}>
            {tasks.map((task) => {
            return (
              <Reorder.Item key={task.id} value={task}>
                {
                  <Task
                  isComplete={task.isComplete}
                  title={task.title}
                  task={task}
                  handleDeleteTask={handleDeleteTask}
                  handleCompleteTask={handleCompleteTask}
                />
                }
              </Reorder.Item>
            );
          })}
          </Reorder.Group>
      </div>
    </main>
  );
}
