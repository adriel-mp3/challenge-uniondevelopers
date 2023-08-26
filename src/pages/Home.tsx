import React from "react";
import UserList from "../components/UserList";
import useFetch from "../hooks/useFetch";
import ListPagination from "../components/UserList/ListPagination";
import FilterUserInput from "../components/FilterUserInput";
import Divider from "../components/Divider";

interface User {
  name: {
    first: string;
    last: string;
  };
}

const Home = () => {
  const { data, loading, error, request: get } = useFetch();
  const [page, setPage] = React.useState(1);
  const [filterText, setFilterText] = React.useState("");

  React.useEffect(() => {
    (async () => {
      await get(
        `https://randomuser.me/api/?page=${page}&results=10&seed=abc`,
        {}
      );
    })();
  }, [get, page]);

  const filteredUsers = filterText
    ? data?.results.filter(
        (user: User) =>
          user.name.first.toLowerCase().includes(filterText.toLowerCase()) ||
          user.name.last.toLowerCase().includes(filterText.toLowerCase())
      )
    : data?.results;

  return (
    <>
      <header className="home-header">
        <h1 className="heading-primary">List Users</h1>
        <FilterUserInput setFilterText={setFilterText} />
      </header>
      <Divider/>
      <main className="home-wrapper">
        <UserList data={filteredUsers} status={{ error, loading }} />
        <ListPagination page={page} setPage={setPage} />
      </main>
    </>
  );
};

export default Home;
