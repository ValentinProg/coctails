import React, { useContext } from "react";
import { useGlobalContext } from "../../context";
import Loading from "../Loading/Loading";

const CoctailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2>no cocktails matched your search criteria</h2>;
  }

  return <div>CoctailList</div>;
};

export default CoctailList;
