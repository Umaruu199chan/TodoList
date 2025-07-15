import styles from "./css/App.module.css";
import Header from "./Header";
import Test from "./Test";
function App() {
  return (
    <>
      <div className={styles.App}></div>
      <Header />
      <Test />
    </>
  )
}

export default App
