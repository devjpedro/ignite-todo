import styles from "./style.module.css";

import logoToDo from "../../assets/logo-todo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoToDo} />
    </header>
  );
}
