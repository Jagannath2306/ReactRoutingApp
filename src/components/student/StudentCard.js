import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../utilities/api";
import StudentStyle from"./Studentstyle.css"
export default function StudentCard() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        client.get("/users").then((res) => {
            console.log(res.data.users)
        setStudents(res.data.users);
      });
    }, []);
    return (
      <>
        <div className="row">
          <div className="col-12 p-4">
            <h3>Students Card View </h3>
          </div>
        </div>
        <div className="row">
          {students.map((student, ind) => {
            return (
              <div className="col-3" key={student.id}>
                <div className="card col-hight align-items-center pt-2 shadow">
                  <img
                    src={student.image}
                    className="card-img-top card-img"
                    alt="..."
                  />
                  <div className="card-body h-25">
                    <p className="card-text fw-bold">Name : {student.firstName} {student.lastName}</p>
                    <p className="fw-light"> Age : {student.age}</p>
                    <p className="fw-light"> Gender : {student.gender}</p>
                    <p className="fw-light"> Email : {student.email}</p>
                    <p className="fw-light"> Phone : {student.phone}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
