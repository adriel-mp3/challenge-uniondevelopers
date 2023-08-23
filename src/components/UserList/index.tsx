import React from "react";
import userListHeaderItems from "../../utils/userListHeaderItems";
import UserInfo from "./UserInfo";

const UserList = ({ data, status }) => {

  if (status.loading) {
    return (
      <p className="text-base" style={{ color: "white", textAlign: "center" }}>
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
    <div className="list">
      <div className="list-header">
        {userListHeaderItems.map((item, index) => (
          <div className="header-item" key={index}>
            <span className="text-base">{item.label}</span>
          </div>
        ))}
      </div>
      {data && data.results.map((user) => (
        <UserInfo user={user} key={user.id.value} />
      ))}
    </div>
  );
};

export default UserList;
