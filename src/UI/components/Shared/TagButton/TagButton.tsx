import React from 'react';
import styles from './TagButton.module.scss';

interface IProps {
	children: React.ReactNode;
	onClick?: () => void;
	bgColor?: string;
	textColor?: string;
	border?: string;
	className?: string;
	fontSize?: string;
}


const TagButton = (props: IProps) => {
	const { children, onClick, bgColor = 'gray', textColor = 'black', className } = props;
	let baseClass = onClick ? `${styles.tagBtn} ${styles.tagBtnClickable}` : styles.tagBtn;
	baseClass = className ? `${baseClass} ${className}` : baseClass;

	const handleOnClick = () => {
		onClick && onClick();
	};

	return (
		<div onClick={handleOnClick} className={baseClass} style={{ backgroundColor: bgColor, color: textColor, fontSize: props.fontSize? props.fontSize : 'max(14px)'}}>
			{children}
		</div>
	);
};

export default TagButton;