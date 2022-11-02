import React from "react";
import ResultItem from "./ResultItem";
import { useSelector } from "react-redux";

const ResultList = ({ onSearchSelect }) => {
  const resultList = useSelector((state) => state.result.resultsList);
  const renderList = resultList.map((result) => {
    return (
      <ResultItem
        key={result.id}
        onSearchSelect={onSearchSelect}
        result={result}
      />
    );
  });
  return <div>{renderList}</div>;
};

export default ResultList;
