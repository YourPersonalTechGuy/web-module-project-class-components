// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    return(
        <div className="TodoList">
            {props.tasks.map((item) => (
                <Todo key={item.id} tasks={item} completeTask={props.completeTask} />
            ))}
        </div>
    )
  }
  
  export default TodoList;