import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getResultAction } from "./Structure/action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState("");
  const submit = (event) => {
    event.preventDefault();
    dispatch(getResultAction(searchItem));
  };
  const onChangeInput = (event) => {
    setSearchItem(event.target.value);
    console.log(searchItem);
  };
  useEffect(() => {
    dispatch(getResultAction("building"));
  }, []);
  return (
    <div className="search-bar ui segment">
      <form onSubmit={submit} className="ui form">
        <div className="field">
          <label className="ui pointing below label">Searching:</label>
          <input onChange={onChangeInput} type="text" value={searchItem} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
