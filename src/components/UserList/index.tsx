import React from "react";
import userListHeaderItems from "../../utils/userListHeaderItems";
import UserInfo from "./UserInfo";
import StatusMessage from "./StatusMessage";

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
    return <StatusMessage type={'loading'}/>
  }

  if (status.error) {
    return <StatusMessage type={'error'}/>
  }
  
  if (data && data.length === 0) {
    return <StatusMessage type={'notFound'}/>
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
      {data &&
        data.map((user) => <UserInfo user={user} key={user.login.uuid} />)}
    </main>
  );
};

export default UserList;
