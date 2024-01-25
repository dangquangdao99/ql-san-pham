import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3031/login", inputData).then((res) => {
      alert("Đăng nhập thành công!");
      navigate("/");
    });
  };
  return (
    <>
      <h1 className="text-center">Đăng nhập</h1>
      <div className="d-flex w-100 vh-50 justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={(e) =>
                  setInputData({ ...inputData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={(e) =>
                  setInputData({ ...inputData, email: e.target.value })
                }
              ></input>
            </div>
            <br />
            <button className="btn btn-info">Đăng nhập</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
