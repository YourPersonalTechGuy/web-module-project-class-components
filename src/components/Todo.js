import React from "react";

const todo = (props) => {
    return (
      <div
        onClick={()=> props.completeTask(props.tasks.id)}
        className={`task${props.tasks.completed ? "completed" : ""}`}
      >
        <div className="tasks"> <p>{props.tasks.task}</p> </div>
      </div>
    )
}

export default todo;