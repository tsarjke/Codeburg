import React from "react";
import './Post-list-item.css';

const PostListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-lavel">Hello world</span>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-star btn-sm" type="button">
          <i className="fa fa-star"></i>
        </button>
        <button className="btn-trash btn-sm" type="button">
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  );
};

export default PostListItem;
