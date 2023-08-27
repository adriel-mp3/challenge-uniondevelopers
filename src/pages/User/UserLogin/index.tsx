import React from 'react'
import { UserContext } from "../../../context/UserContext";

interface UserLogin {
  email:string;
  login: {
    username: string;
    uuid: string;
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
  location: {
    postcode:string;
  }
  gender: string;
}

const UserLogin = () => {
  const { userInfo }: { userInfo: UserLogin } =
    React.useContext(UserContext);
  return (
    <ul className="info-list">
      <li>
        <span>Username</span>
        <p>{userInfo.login.username}</p>
      </li>
      <li>
        <span>E-mail</span>
        <p>{userInfo.email}</p>
      </li>
      <li>
        <span>Email</span>
        <p>{userInfo.email}</p>
      </li>
      <li>
        <span>uuid</span>
        <p>{userInfo.login.uuid}</p>
      </li>
      <li>
        <span>Post Code</span>
        <p>{userInfo.location.postcode}</p>
      </li>
    </ul>
  );
}

export default UserLogin