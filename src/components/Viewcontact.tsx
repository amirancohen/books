import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import "./contactus.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { getViewContact } from "../services/ApiService";

export interface AllViewContact {
  _id?: string;
  fullname?: string;
  fulltext?: string;
}

const ViewContactus = ({ _id, fullname, fulltext }: AllViewContact) => {
  const [cards, setCards] = useState<Array<AllViewContact>>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getViewContact().then((json) => setCards(json));
  }, []);

  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="mt-5">
        <Title mainText="  המלצות" subText="  " />
      </div>
      {cards.map((item) => (
        <div key={item._id} className="creditto w-50" dir="rtl">
          <div className="row row-cols-1 row-cols-md-2 g-4 mt-5 ">
            <div className="col">
              <div className="card text-bg-light mb-3 cuntactyou border border-5 rounded-4 shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="card-header text-primary text-center fs-4">
                  המלצה
                </div>
                <div className="card-body">
                  <h5 className="card-title"> {item.fullname} </h5>
                  <p className="card-text fs-4"> {item.fulltext}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewContactus;
