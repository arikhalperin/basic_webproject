import React from 'react';
import styles from './textArea.module.scss';

const TextArea = ({ id, meta: { touched, error }, input, step, className, placeholder, disabled }) => {
	const errorClass = touched && error ? 'is-invalid' : '';
	const newClassName = `form-control ${styles.textarea} ${className} ${errorClass}`;
	return (
		<textarea id={id} {...input} step={step} placeholder={placeholder} disabled={disabled} className={newClassName} />
	);
};

export default TextArea;
