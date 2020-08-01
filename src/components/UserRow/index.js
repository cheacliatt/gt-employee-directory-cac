import React from "react";
import "./style.css";

function UserRow(props) {
  return (
    <div className="row d-flex p-2">
      <div className="col-sm-2">
        <img
          alt={props.name}
          className="img-fluid"
          src={props.src}
          style={{ margin: "0 auto" }}
        />
      </div>
      <div className="col-sm-2">
  <p>Name: {props.firstName} {props.lastName}</p>
      </div>
      <div className="col-sm-2">
        <p>Email: {props.email}</p>
      </div>
      <div className="col-sm-2">
        <p>Age: {props.age}</p>
      </div>
      <div className="col-sm-2">
        <p>Phone: {props.phone}</p>
      </div>
      <div className="col-sm-2">
        <p>ID: {props.id}</p>
      </div>
    </div>
  );
}

export default UserRow;
