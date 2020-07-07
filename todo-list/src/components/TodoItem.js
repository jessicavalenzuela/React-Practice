import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitilize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <img
              src="https://www.freeiconspng.com/uploads/edit-icon-png-24.png"
              height="20"
              width="20"
            />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <img
              src="https://image.flaticon.com/icons/png/512/61/61848.png"
              height="20"
              width="20"
            />
          </span>
        </div>
      </li>
    );
  }
}
