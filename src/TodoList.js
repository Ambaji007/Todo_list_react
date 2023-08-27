import React from "react";

const TodoList = ({ todolist,deleteHhandler }) => {
  return (
    <div>
      {todolist.map((todo, index) => (
        <div key={index}>
          <h5>
            {todo} &nbsp; <button onClick={()=> deleteHhandler(index)} className="btn btn-danger">Delete</button>{" "}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
