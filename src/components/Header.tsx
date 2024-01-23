import { removeToken } from "../auth/TokenManager";
import "./header.css";
import imgme from "./pic/einat.jpg";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../context/user";
import React from "react";

const connecteRegister = ["Register"];
const connectedLogin = ["Login"];
const noConnectedMenu = ["Logout"];

function Header() {
  const user = useUserData();
  const navigator = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    removeToken();
    navigator("login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" dir="rtl">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="imaga rounded-circle" src={imgme} alt="" />
            עינת זילברמן
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent  "
          >
            <div>
              <a href="https://api.whatsapp.com/send?phone=972522935212">
                <i className="bi bi-whatsapp fs-3 me-3 text-success"></i>
              </a>
              <a href="mailto:einatzilbe@gmail.com?subject=עריכה לשונית&body=">
                <i className="bi bi-envelope-at-fill fs-3 me-3"></i>
              </a>
            </div>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 regiloga">
              {user?.isLogedIn ? (
                <li className="nav-item">
                  {noConnectedMenu.map((item) => (
                    <a
                      key={item}
                      onClick={() => handleLogout()}
                      className="nav-link"
                      href="/"
                    >
                      התנתק
                    </a>
                  ))}
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    {connecteRegister.map((item) => (
                      <a
                        key={item}
                        onClick={() => handleCloseUserMenu()}
                        className="nav-link active"
                        href="register"
                      >
                        הרשמה
                      </a>
                    ))}
                  </li>
                  <li className="nav-item">
                    {connectedLogin.map((item) => (
                      <a
                        key={item}
                        onClick={() => handleCloseUserMenu()}
                        className="nav-link"
                        href="login"
                      >
                        התחבר
                      </a>
                    ))}
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
