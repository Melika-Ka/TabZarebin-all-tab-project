import React from "react";
import classes from "./ResultItem.module.css";

{
  /* <div class="ui items">
  <div class="item">
    <div class="ui tiny image">
      <img src={result.thumbnail} />
    </div>
    <div class="content">
      <a class="header" href={result.web_link}>
        {result.web_displayed_link[0]}
      </a>
      <div class="meta">Description</div>
      <div class="description">
        <img src={result.thumbnail} class="ui image" />
      </div>
      <div class="extra">{result.description}</div>
    </div>
  </div>
</div>; */
}

////
{
  /* <div class="ui card">
  <div class="content">
    <img src={result.thumbnail} class="ui mini right floated image" />
    <div class="header">{result.title}</div>
    <div class="meta">
      <a href={result.web_link}>{result.web_displayed_link[0]}</a>
    </div>
    <div class="description">{result.description}</div>
  </div>
</div>; */
}

const ResultItem = ({ result, onSearchSelect }) => {
  return (
    <div className="ui grid">
      <div onClick={() => onSearchSelect(result)} className={classes.result}>
        <div className={classes.link}>
          <a href={result.web_link}>{result.web_displayed_link[0]}</a>
        </div>
        <div className={classes.title}>
          <p>{result.title}</p>
        </div>
        <div className={classes.description}>{result.description}</div>
        <div className={classes.img}>
          <img src={result.thumbnail} />
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
