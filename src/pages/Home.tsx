import React from "react";
const Home = () => {
  return (
    <>
      <header className="home-header">
        <h1 className="heading-primary">List Users</h1>
        <div className="input-wrapper">
          <input className="text-input" type="text" placeholder="Search user..."/>
        </div>
      </header>
    </>
  );
};

export default Home;
