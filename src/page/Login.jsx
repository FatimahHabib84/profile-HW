import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useImage from "../assets/useImage.png";

function Login() {
  const [user, setUser] = useState({ email: "", pwd: "" });
  const [dialog, setDialog] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (user.username === "" || user.email === "" || user.pwd === "") {
      setDialog("Please fill all Information");
      document.getElementById("my_modal_1").showModal();
    } else {
      axios
        .get(`https://665736bb9f970b3b36c86669.mockapi.io/profile`)
        .then(function (res) {
          const validEmail = res.data.find((item) => {
            return item.email == user.email;
          });
          // console.log(validEmail);
          if (validEmail === undefined) {
            setDialog("This account is not registred!");
            document.getElementById("my_modal_1").showModal();
          } else if (
            validEmail.email == user.email &&
            validEmail.pwd == user.pwd
          ) {
            localStorage.setItem("email", validEmail.email);
            localStorage.setItem("username", validEmail.username);
            localStorage.setItem("id", validEmail.id);
            console.log(localStorage.getItem("image"));
            if (localStorage.getItem("image") == null) {
              localStorage.setItem(
                "image",
                "https://cdn-icons-png.flaticon.com/512/17/17004.png"
              );
            } else {
              localStorage.setItem("image", validEmail.image);
            }
            navigate(`/Profile/${validEmail.id}`);
          } else if (
            validEmail.email !== user.email ||
            validEmail.pwd !== user.pwd
          ) {
            setDialog("Invalid email or password!");
            document.getElementById("my_modal_1").showModal();
          }
        });
    }
  };
  console.log(localStorage.getItem("image"));

  return (
    <div
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="card bg-base-100 bg-opacity-70 max-sm:w-full w-1/2 shrink-0 shadow-2xl  max-sm:mx-2">
        <div className="card-body">
          <div className="grid grid-cols-3 items-center">
            <h1 className="font-bold text-center text-xl col-start-2">Login</h1>
            <button
              className="btn btn-base-300 col-start-3 w-fit justify-self-end"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              value={user.pwd}
              onChange={(e) => setUser({ ...user, pwd: e.target.value })}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={() => handleClick()}>
              Login
            </button>
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Warning!</h3>
          <p className="py-4">{dialog}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
