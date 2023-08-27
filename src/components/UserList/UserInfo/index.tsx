import { Link } from "react-router-dom";
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
}

interface UserInfoProps {
  user: User;
}

const UserInfo = ({ user }: UserInfoProps) => {
  const formatDate = (date: string) => date.split("T")[0];
  const { setUserInfo } = React.useContext(UserContext);
  return (
    <div className="list-item">
      <div className="item-info">
        <span className="text-base">{user.login.salt}</span>
      </div>
      <div className="item-info">
        <span className="text-base">{user.name.first}</span>
      </div>
      <div className="item-info">
        <span className="text-base">{user.name.last}</span>
      </div>
      <div className="item-info">
        <span className="text-base">{user.name.title}</span>
      </div>
      <div className="item-info">
        <span className="text-base">{formatDate(user.dob.date)}</span>
      </div>
      <div className="item-info">
        <span className="text-base">{user.dob.age}</span>
      </div>
      <div className="item-info">
        <Link
          to={`/user/${user.name.first}`}
          className="text-base profile-link"
          onClick={() => setUserInfo(user)}
        >
          View profile
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
