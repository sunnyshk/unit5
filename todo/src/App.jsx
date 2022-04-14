import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currTask, setCurrTask] = useState("");

  const inputArea = useRef(null);

  const addTask = () => {
    setTodoList([...todoList, { task: currTask, completed: false }]);
    inputArea.current.value = "";
    setCurrTask("");
    // console.log(todoList);
  };

  const deleteTask = (taskToDel) => {
    setTodoList(
      todoList.filter((task) => {
        return task.task !== taskToDel;
      })
    );
  };

  const completeTask = (taskToComp) => {
    setTodoList(
      todoList.map((task) => {
        return task.task == taskToComp
          ? { task: taskToComp, completed: true }
          : { task: task.task, completed: task.completed ? true : false };
      })
    );
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        ref={inputArea}
        type="text"
        placeholder="Add Task"
        onChange={(event) => {
          setCurrTask(event.target.value);
        }}
      />
      <button onClick={addTask}>Add Task</button>
      <hr />
      <ul>
        {todoList.map((val, key) => {
          return (
            <div id="task">
              <li key={key}>{val.task}</li>
              <button onClick={() => completeTask(val.task)}>
                Mark as complete
              </button>
              <button onClick={() => deleteTask(val.task)}>Delete Task</button>
              {val.completed ? (
                <h1>Task Completed</h1>
              ) : (
                <h1>Task not completed</h1>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
