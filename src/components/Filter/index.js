import React from "react";
import "./style.css";

function Filter() {
  return (
      
    <form className="filter">
        <div className="form-group form-inline">
            <input type="search" className="form-control" id="searchForm" placeholder="Search Users"></input>
            <button type="submit" className="btn btn-primary">Search</button>
        </div>
    </form>


  );
}

export default Filter;
