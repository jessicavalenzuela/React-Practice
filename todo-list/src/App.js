import React, { Component } from "react";
import { v1 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInputs";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoInputs";
class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up!" },
      { id: 2, title: "brush teeth!" },
    ],
    id: uuid(),
    item: "",
    editITem: false,
  };
  handleChange = (e) => {};
  handleSubmit = (e) => {};
  clearList = () => {};
  handleDelete = (id) => {};
  handleEdit = (id) => {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center"> Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editITem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
