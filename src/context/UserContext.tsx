import React, { ReactNode } from "react";

interface UserStorageProps {
  children: ReactNode;
}

export const UserContext = React.createContext({});

export const UserStorage = ({ children }: UserStorageProps) => {
  const [userInfo, setUserInfo] = React.useState([]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
