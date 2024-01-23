import { useContext, useState } from "react";
import Title from "../components/Title";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setToken } from "./TokenManager";
import { login } from "../services/ApiService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validate = (): boolean => {
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
  };

  const handleClick = () => {
    if (!validate()) {
      return;
    }

    login({
      email,
      password,
    })
      .then((status) => {
        if(status){
          navigate("/");
        }
      })
      .catch((error) => {
        //TODO: handle if has error
      });
  };

  return (
    <>
      <Title mainText="התחבר" subText="" />
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={() => handleClick()} className="btn btn-success">
            התחבר
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
