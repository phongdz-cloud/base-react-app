import React from "react";
import "./Register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "react-toastify";
import { postRegister } from "../../services/apiServices";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // validate
    if (!validateEmail(email)) {
      toast.error("Email is invalid!");
      return;
    }

    if (!password) {
      toast.error("Password is requried!");
      return;
    }

    // submit apis
    let data = await postRegister(email, password, username);

    if (data && +data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }

    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  const handleVisiblePasword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="register-container">
      <div className="header">
        <span>Already have an account?</span>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </button>
      </div>
      <div className="title col-4 mx-auto">
        <b>Đăng ký</b>
      </div>
      <div className="content-form col-4 mx-auto">
        <form>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              required
              placeholder="Type your email ..."
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Type your username ..."
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-group">
              <input
                type={!visiblePassword ? "password" : "text"}
                className="form-control"
                placeholder="Type your password ..."
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div className="input-group-append">
                <span className="input-group-text h-100">
                  {!visiblePassword ? (
                    <BiShow
                      cursor="pointer"
                      size={15}
                      onClick={() => handleVisiblePasword()}
                    />
                  ) : (
                    <BiHide
                      cursor="pointer"
                      size={15}
                      onClick={() => handleVisiblePasword()}
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary col-12"
              onClick={(e) => handleRegister(e)}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
