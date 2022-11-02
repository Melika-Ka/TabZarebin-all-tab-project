import React, { useState } from "react";
import ResultList from "./ResultList";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { getResultAction } from "./Structure/action";

const Container = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectSearch, setSelectSearch] = useState(null);
  const selectHandler = (result) => {
    setSelectSearch(result);
  };
  const onSettingPage = (query) => {
    setQuery(query);
  };
  const pageLoading = () => {
    page = +1;
    setPage(page);
    const list = {
      query,
      page,
    };
    // dispatch(getResultAction(list));
  };
  return (
    <div className="ui container">
      <SearchBar onSettingPage={onSettingPage} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <ResultList onSearchSelect={selectHandler} />
            <div style={{ marginTop: "50px" }}>
              <button className="ui fluid button" onClick={pageLoading}>
                More Result
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
