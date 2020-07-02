import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ setAlertMessage, searchUser }) => {
	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			setAlertMessage('Please enter a city');
		} else {
			searchUser(text);
			setText('');
		}
	};

	const onChange = (e) => {
		setText(e.target.value);
	};

	return (
		<div className='container' style={containerStyle}>
			<form onSubmit={onSubmit} className='form'>
				<div className='input-group mb-2'>
					<input
						type='text'
						name='text'
						className='form-control'
						placeholder='Enter City...'
						aria-label="Recipient's username"
						aria-describedby='basic-addon2'
						onChange={onChange}
					/>
					<button
						type='submit'
						className='btn btn-outline-secondary input-group-append'
					>
						Find
					</button>
				</div>
			</form>
		</div>
	);
};

const containerStyle = {
	textAlign: 'center',
	marginTop: '20px',
	maxWidth: '250px',
};

Form.propTypes = {
	searchUser: PropTypes.func.isRequired,
	setAlertMessage: PropTypes.func.isRequired,
};
export default Form;
