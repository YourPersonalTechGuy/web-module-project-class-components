import React from "react";

class TodoList extends React.Component {

    constructor(){
      super();
      this.state = {
        todoText: "",
      };
    };
  
    changeHelper = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  
    submitHelper = (e) => {
      e.preventDefault();
      this.props.addTask(this.state.todoText)
      this.setState({
        todoText: "",
      });
    };
  
    render(){
      return (
        <div className="form-container">
            <form onSubmit={this.submitHelper}>
                <input
                    type="text"
                    name="todoText"
                    value={this.state.todoText}
                    onChange={this.changeHelper}
                />
        
                <button>Add</button>
            </form>
            <button onClick={this.props.clear}>Clear</button>
        </div>
        
      );
    }
  }
  
  export default TodoList;