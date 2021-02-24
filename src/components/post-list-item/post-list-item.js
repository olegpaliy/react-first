import React from "react";

const PostListItem = () => {
  return (
    <li className="app-list d-flex justify-content-between">
      <span className="app-list-item-label">Hello world!</span>
      <div className="d-flex justify-content align-item-center">
        <button type="text" className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button type="text" className="bnt-trash btn-sm">
          <i className="fa fa-heart"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  );
};

export default PostListItem;