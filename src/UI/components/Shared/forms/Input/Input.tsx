import React from "react";
import styles from './input.module.scss';

interface IProps {
	id?: string;
	meta?: any;
	input?: any;
	step?: any;
	className?: string;
	placeholder?: string;
	disabled?: boolean;
	value?: any,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: () => void;
	type?: string;
}

const Input = (props: IProps) => {
	const { id, meta, input, type, step, className, placeholder, disabled, value, onChange, onClick } = props;
	const { touched, error } = (meta || {});

	const errorClass = touched && error ? "is-invalid" : "";
	const newClassName = `form-control ${styles.input} ${className} ${errorClass}`;

	if (onChange || value) {
		return <input
			id={id}
			type={input && input.type || type}
			step={step}
			placeholder={placeholder}
			disabled={disabled || false}
			className={newClassName}
			value={(value !== undefined && value !== null) ? value : ""}
			onClick={onClick}
			onChange={onChange}
		/>;
	}

	return <input
		id={id}
		type={type} {...input}
		step={step}
		placeholder={placeholder}
		disabled={disabled}
		className={newClassName}
	/>;
};

export default Input;

