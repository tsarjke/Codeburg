import React from "react";
import './Post-add-form.css';

const PostAddForm = () => {
  return (
    <fomr className="bottom-panel d-flex">
      <input
        className="form-control new-form-label"
        type="text"
        placeholder="О чем вы думаете сейчас?"
      />
      <button className="btn btn-outline-secondary" type="submit">
        Добавить
      </button>
    </fomr>
  );
};

export default PostAddForm;
