import React from "react";

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="про що ти думав?"
        className="form-control new-post-label"
      />
      <button type="text" className="btn btn-outline-secondary">
        add
      </button>
    </form>
  );
};

export default PostAddForm;