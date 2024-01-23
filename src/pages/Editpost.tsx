import { useEffect, useState } from "react";
import Title from "../components/Title";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BookUpdate, getCardById } from "../services/ApiService";
import "./editpost.css";

export interface Editbook {
  id?: string;
  namebook: string;
  description: string;
}
function Editpost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [namebook, setNamebook] = useState("");
  const [description, setDescription] = useState("");

  const setCardValues = async (id: any) => {
    const cardResponse = await getCardById(id);
    const card = cardResponse;
    setNamebook(card.namebook);
    setDescription(card.description);
  };

  useEffect(() => {
    if (!!id) setCardValues(id);
  }, [id]);

  function validate(): boolean {
    if (!namebook) {
      toast.error("nameprojectx is required.");
      return false;
    }
    if (!description) {
      toast.error("img is required.");
      return false;
    }

    return true;
  }
  function handleClick() {
    if (!validate()) {
      return;
    }

    if (!id) return;

    BookUpdate(id, {
      namebook,
      description,
    }).then((data) => {
      navigate("/");
      // return to the projectx page...
    });
  }
  return (
    <>
      <Title mainText="  עריכת ספר  " subText="" />
      <div className="d-flex justify-content-center" dir="rtl">
        <form action="">
          <div>
            <label className="ms-2" htmlFor="">
              שם הספר
            </label>
            <input
              className="shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-4 "
              type="text"
              defaultValue={namebook}
              name="namebook"
              onChange={(e) => {
                console.log(namebook);
                setNamebook(e.target.value);
              }}
            />
          </div>
          <div className="textare">
            <label className="ms-2" htmlFor="">
              תיאור הספר{" "}
            </label>
            <textarea
              className="form-control shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-4 "
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </form>
      </div>
      <div className="text-center mt-5 ">
        <button onClick={handleClick} className="btn btn-primary fs-4">
          שלח{" "}
        </button>
      </div>
    </>
  );
}

export default Editpost;
