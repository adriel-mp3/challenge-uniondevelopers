import React from "react";
import { UserContext } from "../../../context/UserContext";

interface UserLocation {
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    postcode: number;
  };
}

const UserLocation = () => {
  const { userInfo }: { userInfo: UserLocation } =
    React.useContext(UserContext);

  return (
    <ul className="info-list">
      <li>
        <span>Street Number</span>
        <p>{userInfo.location.street.number}</p>
      </li>
      <li>
        <span>Street Name</span>
        <p>{userInfo.location.street.name}</p>
      </li>
      <li>
        <span>City</span>
        <p>{userInfo.location.city}</p>
      </li>
      <li>
        <span>State</span>
        <p>{userInfo.location.state}</p>
      </li>
      <li>
        <span>Post Code</span>
        <p>{userInfo.location.postcode}</p>
      </li>
    </ul>
  );
};

export default UserLocation;
