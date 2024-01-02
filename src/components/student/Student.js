import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Student() {
  return (
   <>
    <div className="row">
      <div className="col-12 text-center">
        <h1>Students component</h1>
      </div>
      <div className="col-12">
        <Link to="/students/studenttable" className="btn btn-outline-info m-3">Students Table View</Link>
        <Link to="/students/studentcard"  className="btn btn-outline-info">Students Card View</Link>
      </div>
      <hr />
    </div>
     <div className="row">
        <div className="col-12">
        <Outlet />
        </div>
     </div></>
  );
}
