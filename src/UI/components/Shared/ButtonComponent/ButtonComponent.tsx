import * as React from 'react';
import styles from './ButtonComponent.module.scss';

interface IProps {
	text: string | React.ReactNode;
	onClick?: Function;
	buttonInBottom?: boolean;
	disabled?: boolean;
	type?: 'submit' | 'reset' | 'button';
	block?: boolean;
	className?: string;
	icon?: any
}

const ButtonComponent = (props: IProps) => {
	const { text, type = "button", buttonInBottom, disabled = false, className, block, icon } = props;

	const handleOnClick = () => {
		props.onClick && props.onClick();
	};

	return (
		<div className={`align-items-center justify-content-center ${buttonInBottom && styles.btnBottom}`}>
			<button
				disabled={disabled}
				type={type}
				className={`btn ${styles.btnPurple} ${block ? styles.btnBlock : ''} ${className ? className : ''}`}
				onClick={handleOnClick}
			>
				{icon && <span className={'mr-1'}>{icon}</span>}
				<span>{text}</span>
			</button>
		</div>
	);
};

export default ButtonComponent;
