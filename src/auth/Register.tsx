import { useState } from "react";
import Title from "../components/Title";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../services/ApiService";

export interface User {
  _id?: string;
  email: string;
  password?: string;
  token?: string;
  isAdmin?: boolean;
}
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function validate(): boolean {
    if (!email) {
      // also check that email is required with regex
      toast.error("email is required.");
      return false;
    }

    if (!password || password.length < 6) {
      toast.error("Password must contain at least 6 characters.");
      return false;
    }

    return true;
  }
  const handleClick = (event: any) => {
    if (!validate()) {
      return;
    }
    event.preventDefault();
    register({
      email,
      password,
    });

    navigate("/login");
  };

  return (
    <>
      <Title mainText="הרשמה " subText="" />
      <form className="registart" action="" dir="rtl">
        <div className="w-25 registera mt-5">
          <div className="input-group mb-3" dir="rtl">
            <span className="input-group-text" id="inputGroup-sizing-default">
              דואר אלקטרוני{" "}
            </span>
            <input
              type="email"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="input-group mb-3" dir="rtl">
            <span className="input-group-text" id="inputGroup-sizing-default">
              סיסמה
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <button type="button" onClick={(e: any) => handleClick(e)} className="btn btn-success">
            הרשם
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
