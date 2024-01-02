import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Employee from "./components/employee/Employee";
import Student from "./components/student/Student";
import Notfound from "./components/notfound/Notfound";
import ProductDetails from "./components/products/ProductDetails";
import EmployeeDetails from "./components/employee/EmployeeDetails";
import StudentTable from "./components/student/StudentTable";
import StudentCard from "./components/student/StudentCard";
import Admin from "./components/admin/Admin";
import ProtectedRoute from "./utilities/ProtectedRoute";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route exact path="/employees" element={<Employee />} />
        <Route exact path="/employeedetails" element={<EmployeeDetails />} />
        <Route path="/students" element={<Student />}>
          <Route index element={<StudentTable />} />
          <Route path="studenttable" element={<StudentTable />} />
          <Route path="studentcard" element={<StudentCard />} />
        </Route>
        <Route exact path="/admin" element={ 
            <ProtectedRoute>
              <Admin />
              </ProtectedRoute>} />
        <Route path="*" element={<Notfound />} /> (No Match Route)
      </Routes>
    </>
  );
}
