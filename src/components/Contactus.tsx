import Title from "./Title";
import "./contactus.css";
import { useState } from "react";
import { contactnew } from "../services/ApiService";
import { useNavigate } from "react-router-dom";

export interface Addcontact {
  _id?: string;
  fullname?: string;
  fulltext?: string;
}

function Contactus() {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("");
  const [fulltext, setFullText] = useState("");

  function validate(): boolean {
    if (!fullname) {
      return false;
    }

    if (!fulltext) {
      return false;
    }

    return true;
  }

  async function handleSubmit() {
    if (!validate()) return;

    await contactnew({
      fullname,
      fulltext,
    });
    navigate("homepage");
  }
  return (
    <>
      <div className="mt-5">
        <Title mainText="  הוסף המלצה" subText="  " />
      </div>
      <div className="nemayore" dir="rtl">
        <div className="card w-50 cardha  mt-3 ">
          <div className="input-group mb-3">
            <span className="input-group-text">שם מלא</span>
            <input
              value={fullname}
              name="fullname"
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="שם מלא"
            />
          </div>
          <div className="input-group">
            <span className="input-group-text ">כתוב המלצה</span>
            <textarea
              className="form-control"
              aria-label="כתוב המלצה"
              value={fulltext}
              name="fulltext"
              onChange={(e) => setFullText(e.target.value)}
            ></textarea>
          </div>
          <a href="/">
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-success"
            >
              שלח
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contactus;
