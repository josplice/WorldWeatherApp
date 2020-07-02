import React from 'react';

const Alert = ({ alert }) => {
	return (
		alert !== null && (
			<div style={containerStyle}>
				<h6>{alert.msg}</h6>
			</div>
		)
	);
};
const containerStyle = {
	textAlign: 'center',
	margin: 'auto 0',
};

export default Alert;
