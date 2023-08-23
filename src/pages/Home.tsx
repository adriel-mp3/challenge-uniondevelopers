import React from "react";
import UserList from "../components/UserList";
import useFetch from "../hooks/useFetch";
import ListPagination from "../components/UserList/ListPagination";

const Home = () => {
  const { data, loading, error, request: get } = useFetch();
  const [page, setPage] = React.useState(1);
  
  React.useEffect(() => {
    (async function fetchUsers() {
      await get(
        `https://randomuser.me/api/?page=${page}&results=10&seed=abc`,
        {}
      );
    })();
  }, [get, page]);

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
      <main className="home-wrapper">
        <UserList data={data} status={{ error, loading }} />
        <ListPagination page={page} setPage={setPage} />
      </main>
    </>
  );
};

export default Home;
