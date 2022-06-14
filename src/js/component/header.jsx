import propTypes from "prop-types";
import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
	const style = {
		fontSize: "70px",
	};

	return (
		<div className="card">
			<div className="card-body">
				<p className="card-title" style={style}>
					{props.title}
				</p>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string,
};

export default Header;
