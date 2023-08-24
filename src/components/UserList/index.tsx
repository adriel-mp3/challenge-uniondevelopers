import React from "react";
import userListHeaderItems from "../../utils/userListHeaderItems";
import UserInfo from "./UserInfo";

interface User {
  login: {
    salt: string;
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
}

interface UserStatus {
  loading: boolean;
  error: string | null;
}

interface UserListProps {
  data: User[] | null; 
  status: UserStatus;
}

const UserList = ({ data, status }: UserListProps) => {

  if (status.loading) {
    return (
      <p className="text-base" style={{ color: "white", textAlign: "center" , height:'730px'}}>
        Loading...
      </p>
    );
  }

  if (status.error) {
    return (
      <p className="text-base" style={{ color: "red", textAlign: "center" }}>
        {status.error} :c
      </p>
    );
  }

  return (
    <main className="list">
      <div className="list-header">
        {userListHeaderItems.map((item) => (
          <div className="header-item" key={item.label}>
            <span className="text-base">{item.label}</span>
          </div>
        ))}
      </div>
      {data && data.results.map((user) => (
        <UserInfo user={user} key={user.login.uuid} />
      ))}
    </main>
  );
};

export default UserList;
