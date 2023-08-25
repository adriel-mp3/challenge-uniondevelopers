import React from "react";
import { UserContext } from "../../context/UserContext";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import UserInfo from "./UserInfo";
import UserLocation from "./UserLocation";
import UserLogin from "./UserLogin";
import Divider from "../../components/Divider";
const User = () => {
  const { userInfo } = React.useContext(UserContext);
 
  return (
    <>
      <header className="header-user">
        <nav className="nav">
          <Link className="text-base" to="/">
            Back
          </Link>
        </nav>
      </header>
      <main className="user-container">
        <div className="user-label">
          <img
            src={userInfo.picture.large}
            alt={`${userInfo.name.first} foto`}
          />
          <h1 className="heading-primary">{`${userInfo.name.first} ${userInfo.name.last}`}</h1>
          <p className="text-lg">{userInfo.name.title}</p>
        </div>
        <Divider/>
        <div className="user-details">
          <nav>
            <ul className="user-tabnav">
              <li>
                <NavLink className="text-lg" to="" end>
                  Info
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="location">
                  Location
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="login">
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<UserInfo />} />
            <Route path="/location" element={<UserLocation />} />
            <Route path="/login" element={<UserLogin />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default User;
