import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom';
import client from '../../utilities/api';

export default function EmployeeDetails() {
    const [searchParams] = useSearchParams();
    const [employee, setEmployee] = useState({});
    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams]);
        console.log(currentParams.id)
      client.get(`/users/${currentParams.id}`).then((res) => {
        console.log(res.data);
        setEmployee(res.data);
      });
    }, [searchParams]);
  return (
    <>
    <div className="row mt-3">
      <div className="col-12 mx-1 px-4 d-flex justify-content-between">
        <h3>Employee Details </h3>
        <Link to={`/employee`} className="btn btn-outline-secondary mt-2"> Back </Link>
      </div>
    </div>

    <div className="row p-3">
    <hr />
      <div className="col-4 px-2">
        <img
          src={employee.image}
          className="card-img-top card-img"
          alt="..."
        />
      </div>
      <div className="col-8">
        <div className="row">
          <div className="col-6 border-right px-4">
            <h3 className="card-text fw-bold">Name : {employee.firstName} {employee.lastName}</h3>
            <p className="card-text fw-bold"> Gender : {employee.gender}</p>
            <p className="card-text fw-bold">Age : {employee.age}</p>
            <p className="fw-light fw-bold">
            Blood Group : {employee.bloodGroup}
            </p>
          </div>
          <div className="col-6 px-4">
            <h5 className="fw-light fw-bold">
            Email : {employee.email} 
            </h5>
            <p className="fw-light fw-bold">
            Phone : {employee.phone}
            </p>
            <p className="fw-light fw-bold">
            Username : {employee.username} %
            </p>
            <p className="fw-light fw-bold">
            Password :  {employee.password}
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
