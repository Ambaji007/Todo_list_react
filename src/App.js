import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    // console.log(task);
    // debugger;
    setTask(e.target.value);
    // console.log(task);
   
  };

  const submitHadler = (e) => {
    // console.log(e);
    //  console.log(e);

    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
    console.log(newTodos);
  };

  const deleteHhandler = (indexValue) =>{
    const newTodos = todos.filter((todo, index) => index!=indexValue);
    setTodos(newTodos)

  }
 

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Todo List</h2>
            <form onSubmit={submitHadler}>
              <input
                type="text"
                name="task"
                value={task}
                onChange={changeHandler}
              />{" "}
              &nbsp;&nbsp;&nbsp;
              <input type="submit" className="addTask"  value="Add" name="add" />
            </form>
            <TodoList todolist={todos} deleteHhandler={deleteHhandler}  />
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;
