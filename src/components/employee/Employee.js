import React, { useEffect, useState } from "react";
import EmployeeStyle from "./EmployeeStyle.css";
import client from "../../utilities/api";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
export default function Employee() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    client.get("/users").then((res) => {
      // console.log(res.data.users);
      setEmployees(res.data.users);
    });
  }, []);
  const navigateHandler = (id) => {
    navigate({
      pathname: "/employeedetails",
      search: `?${createSearchParams({ id })}`,
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-12 p-4">
          <h1>Employee List </h1>
        </div>
      </div>
      <div className="row">
        {employees.map((employee, ind) => {
          return (
            <div className="col-3" key={employee.id}>
              <div className="card col-hight align-items-center pt-2 shadow">
                <img
                  src={employee.image}
                  className="card-img-top card-img"
                  alt="..."
                />
                <div className="card-body h-25">
                  <p className="card-text fw-bold">
                    {employee.firstName} {employee.lastName}
                  </p>
                  <p className="card-text fw-bold"> {employee.email}</p>
                  <p className="fw-light"> {employee.phone}</p>
                </div>
                <button
                  className="btn btn-info mb-3"
                  onClick={() => {
                    navigateHandler(employee.id);
                  }}
                >
                  View details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
