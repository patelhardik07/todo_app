import React from "react";
import Tasks from "./Tasks";
import "./App.css";

class App extends Tasks {
    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;
        return (
            <div className="App flex">
                <div  className="container">
                    <div className="heading">TO-DO</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                    
                    >
                        <input className="text"
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New TO-DO"
                        />
                        <input className="btn"
                            color="primary"
                            type="submit"
                            value="Add task"
                        />
                
        
                    </form>
                    <div>
                        {tasks.map((task) => (
                            <div
                                key={task._id}
                                className="flex task_container"
                            >
                                <input
                                type="checkbox"
                                
                                    checked={task.completed}
                                    onClick={() => this.handleUpdate(task._id)}
                                />
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.task}
                                </div>
                                <button
                                    className="btn_del"
                                    onClick={() => this.handleDelete(task._id)}
                                >
                                    delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
