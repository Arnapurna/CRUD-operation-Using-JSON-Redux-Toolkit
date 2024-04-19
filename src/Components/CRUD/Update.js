import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../CRUD/UserReducers";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log("user", users);
  // const existingUser = users.filter((user) => user.id === id);
  const {name,email}=users.find(user=>user.id==id)
  console.log('Updatedvalue',name,email)
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);

  // console.log("user after existingUser call", existingUser);
  // console.log("existingUser",existingUser)
  // setUserName(existingUser[0].name);
  // setUserEmail(existingUser[0].email)
  // console.log("existing user", existingUser);
  // const defaultValues = { name: "", email: "" };
  // const { userName, userEmail } = existingUser[0];
  // console.log("existing user", existingUser);


  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({ id: id, name: userName, email: userEmail }));
    navigate('/');

  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-dark text-white p-3">
        <h2> Update user</h2>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control my-1"
              placeholder="Enter Name"
              // value={existingUser[0].name}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control my-1"
              placeholder="Enter Email"
              // value={existingUser[0].email}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-success my-1" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
