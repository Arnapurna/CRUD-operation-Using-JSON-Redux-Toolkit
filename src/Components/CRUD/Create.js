import React, { useState } from "react";
import { addUser } from "../CRUD/UserReducers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate=useNavigate()
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // const id=Math.random().toString(36).substring(2,9)
    dispatch(addUser({ id: users[users.length - 1].id+1, name, email }));
    navigate('/')
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-dark text-white p-3">
      <h2>Add new user</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control my-1"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Email</label>
            <input
              type="text"
              name="email"
              className="form-control my-1"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-success my-1" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
