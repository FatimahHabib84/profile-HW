import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [user, setUser] = useState({ username: "", email: "", pwd: "" });
  const [dialog, setDialog] = useState("");
  const navigate = useNavigate();

  const validUsername = /^[0-9A-Za-z]{4,16}$/;
  const validEmail = /^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,4}$/;
  const validPwd = /^[a-zA-Z0-0.-_@]{6,}$/;

  const handleClick = () => {
    if (user.username === "" && user.email === "" && user.pwd === "") {
      setDialog("Incompleted Information");
      document.getElementById("my_modal_1").showModal();
    } else if (!validUsername.test(user.username)) {
      setDialog("Invalid Username!");
      document.getElementById("my_modal_1").showModal();
    } else if (!validEmail.test(user.email)) {
      console.log(user.email);
      setDialog("Invalid Email!");
      document.getElementById("my_modal_1").showModal();
    } else if (!validPwd.test(user.pwd)) {
      setDialog("Invalid password!");
      document.getElementById("my_modal_1").showModal();
    } else if (
      validUsername.test(user.username) &&
      validEmail.test(user.email) &&
      validPwd.test(user.pwd)
    ) {
      axios
        .post("https://665736bb9f970b3b36c86669.mockapi.io/profile", {
          username: user.username,
          email: user.email,
          pwd: user.pwd,
        })
        .then(function () {
          navigate("/Login");
        });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100  max-sm:w-full w-1/2 shrink-0 shadow-2xl  max-sm:mx-2">
        <div className="card-body">
          <div className="grid grid-cols-3 items-center">
            <h1 className="font-bold text-center text-xl col-start-2">
              Signup
            </h1>
            <button
              className="btn btn-base-300 col-start-3 w-fit justify-self-end"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
              placeholder="username"
              className="input input-bordered"
              required
            />
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
          </div>
          <div className="text-warning-content">
            <p className="font-bold bg-warning py-1 px-4 rounded-lg w-fit">
              Note!
            </p>
            <ol className="list-decimal pl-4 flex flex-col gap-1">
              <li>Username must contain between 4-16 letters and/or numbers</li>
              <li>Email must be correct ex: email@examble.com</li>
              <li>Password must be contain than 6 letters and/or numbers</li>
            </ol>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={() => handleClick()}>
              Signup
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

export default Signup;
