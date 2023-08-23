import React from "react";
import UserList from "../components/UserList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, loading, error, request: get } = useFetch();

  React.useEffect(() => {
    (async function fetchUsers() {
      await get(`https://randomuser.me/api/?page=1&results=10&seed=abc`, {});
    })();
  }, [get]);

  return (
    <>
      <header className="home-header">
        <h1 className="heading-primary">List Users</h1>
        <div className="input-wrapper">
          <input
            className="text-input"
            type="text"
            placeholder="Search user..."
          />
        </div>
      </header>
      <main>
        <UserList data={data} status={{ error, loading }} />
      </main>
    </>
  );
};

export default Home;
