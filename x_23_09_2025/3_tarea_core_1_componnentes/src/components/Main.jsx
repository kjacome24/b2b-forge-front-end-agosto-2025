import styles from './../css/Main.module.css'

const Main = () => {
  return (
    <main className={styles.main}>
      <h1>Bienvenido a mi aplicacion de React!</h1>
      <h2>Lista de cosas por hacer:</h2>
      <ol>
        <li>Apreder React</li>
        <li>Practicar con Vite</li>
        <li>Construir proyectos increible</li>
      </ol>
    </main>
  );
};

export default Main;
