import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUser,updateUser, deleteUser } from "../CRUD/UserReducers";


const Home = () => {
  const dispatch=useDispatch();
  const users = useSelector((state) => state.users);
  // console.log(users)

// const handleAddUser=()=>{
// const newUser={
//   id:Math.random(),
//   name:"New User",
//   email:"newuser@example.com"
// }
// dispatch(addUser(newUser))
// }
// const handleUpdateUser=(id,name,email)=>{
//   const updatedUser={
//     id:id,
//     name:name,
//     email:email
//   }
//   dispatch(updateUser(updatedUser))
// }
// const handleDeleteUser=(id)=>{
//   dispatch(deleteUser(id))
// }



  const handleDelete=(id)=>{
    dispatch(deleteUser({id:id}));
  }
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary bg-dark">
        <Container>
          <Navbar.Brand className="text-center" href="#home">
            CRUD operation Using JSON, Redux Toolkit
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Link to="/create" className="btn btn-success my-3 ms-3">
        Create +
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>
                <button onClick={()=>handleDelete(user.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
