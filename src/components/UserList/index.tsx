import React from "react";
import userListHeaderItems from "../../utils/userListHeaderItems";

const UserList = () => {
  return (
    <div className="list">
      <div className="list-header">
        {userListHeaderItems.map((item, index) => (
          <div className="header-item" key={index}>
            <span className="text-base">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="list-item">
        <div className="item-info">
          <span className="text-base">gdc456dfvdfb</span>
        </div>
        <div className="item-info">
          <span className="text-base">Jennie</span>
        </div>
        <div className="item-info">
          <span className="text-base">Nicohls</span>
        </div>
        <div className="item-info">
          <span className="text-base">Miss</span>
        </div>
        <div className="item-info">
          <span className="text-base">11/02/2023</span>
        </div>
        <div className="item-info">
          <span className="text-base">30</span>
        </div>
        <div className="item-info">
          <span className="text-base profile-link">View profile</span>
        </div>
      </div>
      <div className="list-item">
        <div className="item-info">
          <span className="text-base">gdc456dfvdfb</span>
        </div>
        <div className="item-info">
          <span className="text-base">Jennie</span>
        </div>
        <div className="item-info">
          <span className="text-base">Nicohls</span>
        </div>
        <div className="item-info">
          <span className="text-base">Miss</span>
        </div>
        <div className="item-info">
          <span className="text-base">11/02/2023</span>
        </div>
        <div className="item-info">
          <span className="text-base">30</span>
        </div>
        <div className="item-info">
          <span className="text-base profile-link">View profile</span>
        </div>
      </div>
    </div>
  );
};

export default UserList;
