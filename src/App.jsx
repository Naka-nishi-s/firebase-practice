import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import "./App.css";
import db from "./firebaseConfig";

function App() {
  // taskを管理
  const [tasks, setTasks] = useState([]);

  /**
   * FireStoreからデータ取得して、useStateに突っ込む
   */
  const getData = async () => {
    const taskCollection = collection(db, "tasks");
    const snapShot = await getDocs(taskCollection);
    const tasks = snapShot.docs.map((doc) => doc.data());

    setTasks(tasks);
  };

  return (
    <div className="App">
      {tasks.map((task, index) => (
        <ul key={index}>
          <li>{task.task}</li>
          <li>{task.user}</li>
        </ul>
      ))}
      <button onClick={getData}>ボタン</button>
    </div>
  );
}

export default App;
