import React, { useEffect, useState } from 'react'
import client from '../../utilities/api';

export default function StudentTable() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
      client.get("/users").then((res) => {
        console.log(res.data.users);
        setStudents(res.data.users);
      });
    }, []);
  //   let headers = Object.keys(students[0]);
    return (
      <>
        <div className="main bg-custom">
          <div className="row">
            <div className="col-12">
              <h3 className="mx-3 my-3">Products Table View</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered table-striped">
                <thead>
                  {/* <tr>
                    {headers.map((ele, ind) => {
                      return <th key={ind}>{ele}</th>;
                    })}
                  </tr> */}
                  <tr>
                      <th> Name</th>
                      <th> Age</th>
                      <th> Gender</th>
                      <th> Email</th>
                      <th> Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((ele, ind) => {
                    return (
                      <tr>
                        <td key={ind}> {ele.id}</td>
                        <td> {ele.firstName}  {ele.firstName}</td>
                        <td> {ele.age}</td>
                        <td> {ele.gender}</td>
                        <td> {ele.phone}</td>
                        {/* {Object.values(ele).map((item, indx) => {
                        return <td key={indx}>{item}</td>;
                      })} */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
