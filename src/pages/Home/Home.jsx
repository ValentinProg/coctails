import React from "react";
import CoctailList from "../../components/CoctailList/CoctailList";
import SearchForm from "../../components/SearchForm/SearchForm";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <CoctailList />
    </div>
  );
};

export default Home;
