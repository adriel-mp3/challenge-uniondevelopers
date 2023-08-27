import React from "react";
import { UserContext } from "../../../context/UserContext";

interface User {
  login: {
    salt: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  dob: {
    date: string;
    age: number;
  };
  gender: string;
}

const UserInfo = () => {
  const { userInfo }: { userInfo: User } = React.useContext(UserContext);
  
  return (
    <ul className="info-list">
      <li>
        <span>First Name</span>
        <p>{userInfo.name.first}</p>
      </li>
      <li>
        <span>Last Name</span>
        <p>{userInfo.name.last}</p>
      </li>
      <li>
        <span>Title</span>
        <p>{userInfo.name.title}</p>
      </li>
      <li>
        <span>Gender</span>
        <p>{userInfo.gender}</p>
      </li>
      <li>
        <span>Age</span>
        <p>{userInfo.dob.age}</p>
      </li>
    </ul>
  );
};

export default UserInfo;
