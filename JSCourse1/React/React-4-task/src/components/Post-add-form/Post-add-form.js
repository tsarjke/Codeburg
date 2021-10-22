import React from "react";
import './Post-add-form.css';

const PostAddForm = ({ onAdd }) => {
	return (
		<div className="bottom-panel d-flex">
			<input
				className="form-control new-form-label"
				type="text"
				placeholder="О чем вы думаете сейчас?"
			/>
			<button className="btn btn-outline-secondary" type="submit" onClick={() => onAdd("Hello")}>
				Добавить
			</button>
		</div>
	);
};

export default PostAddForm;
