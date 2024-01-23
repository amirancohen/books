import { useState } from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { booknew } from "../services/ApiService";
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

export interface AddBook {
  _id?: string;
  namebook?: string;
  description?: string;
  image?: File | null;
}

function Addpost() {
  const navigate = useNavigate();
  const [namebook, setNamebook] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  function handleClick() {
    if (!image) {
      console.error("Image must be upload");
      return;
    }
    const formData = new FormData();
    formData.append("namebook", namebook);
    formData.append("description", description);
    formData.append("image", image);
    booknew(formData).then((booknew) => {
      console.log(booknew);
      navigate("/");
    });
    setNamebook("");
    setDescription("");
    setImage(null);
  }
  return (
    <>
      <Title mainText="  הוספת ספר לאחר עריכה" subText="" />
      <div className="d-flex justify-content-center" dir="rtl">
        <form action="/books" method="POST" encType="multipart/form-data">
          <div>
            <label className="ms-2" htmlFor="">
              שם הספר
            </label>
            <input
              className="shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-4 "
              type="text"
              value={namebook}
              name="namebook"
              onChange={(e) => setNamebook(e.target.value)}
            />
          </div>
          <div>
            <label className="ms-2" htmlFor="">
              תיאור הספר
            </label>
            <textarea
              className="form-control shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-4"
              id="exampleFormControlTextarea1"
              rows={3}
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor=""> תמונה </label>
            <input
              type="file"
              name="image"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImage(e.target.files[0]);
                }
              }}
            />
          </div>
        </form>
      </div>
      <div className="text-center mt-5 ">
        <button onClick={handleClick} className="btn btn-primary fs-4">
          שלח
        </button>
      </div>
    </>
  );
}

export default Addpost;
