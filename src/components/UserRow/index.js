import React from "react";
import "./style.css";

function UserRow(props) {
  return (
    <div className="row d-flex p-2 bd-highlight">
      <div className="col-sm-2">
        <img
          alt={props.name}
          className="img-fluid"
          src={props.src}
          style={{ margin: "0 auto" }}
        />
      </div>
      <div className="col-sm-2">
        <p>
          {props.firstName} {props.lastName}
        </p>
      </div>
      <div className="col-sm-2">
        <p>{props.email}</p>
      </div>
      <div className="col-sm-2">
        <p>Age: {props.age}</p>
      </div>
      <div className="col-sm-2">
        <p>{props.phone}</p>
      </div>
      <div className="col-sm-2">
        <p>{props.id}</p>
      </div>
    </div>
  );
}

export default UserRow;
