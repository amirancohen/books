import Title from "./Title";
import "./bookwork.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBook, removecard } from "../services/ApiService";
import React from "react";
import { useUserData } from "../context/user";

export interface AllBooks {
  _id?: string;
  namebook?: string;
  description?: string;
  image?: File | null;
}

const admin_pages = [{ name: "Addpost", route: "Addpost" }];

const Bookswork = ({ _id, namebook, description, image }: AllBooks) => {
  const [cards, setCards] = useState<Array<AllBooks>>([]);
  const user = useUserData();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    getBook().then((json) => setCards(json));
  }, []);

  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //remove project
  function handleRemove(_id: any) {
    const list = cards.filter((item) => item._id !== _id);

    setCards(list);
    console.log(_id);
    // remove item
    removecard(_id);
  }
  return (
    <>
      <div className="mt-5">
        <Title mainText=" שירותי עריכה" subText="" />
      </div>
      {user?.isAdmin &&
        admin_pages.map((page) => (
          <div
            key={page.name}
            onClick={handleCloseUserMenu}
            className="text-center"
            dir="rtl"
          >
            <a href="addpost">
              <button type="button" className="btn btn-success">
                הוסף ספר
              </button>
            </a>
          </div>
        ))}
      {cards.map((item) => (
        <div key={item._id} className="">
          <div className="row row-cols-1 row-cols-md-2 g-2 mt-3" dir="rtl">
            <div className="col cardbook">
              <div className=" mb-3  ">
                <div className="row g-0 border border-5 rounded-4 shadow p-3 mb-5 bg-body-tertiary rounded">
                  <div className="col-md-4">
                    <img
                      src={`http://localhost:3000/images/${item.image}`}
                      className="img-fluid rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body cardha ">
                      <h5 className="card-title text-center text-primary">
                        {item.namebook}
                      </h5>
                      <p className="card-text me-1">{item.description}</p>
                    </div>
                    <button
                      value="editbook"
                      onClick={() => {
                        navigate(`/editpost/${item._id}`);
                      }}
                    >
                      <i className="bi bi-pencil fs-3"></i>
                    </button>
                    <button
                      value="Delete"
                      onClick={() => handleRemove(item._id)}
                    >
                      <i className="bi bi-trash3-fill fs-3"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Bookswork;
