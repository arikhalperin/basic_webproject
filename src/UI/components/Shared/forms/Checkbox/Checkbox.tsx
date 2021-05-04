import React, { useState } from "react";
import { ReactComponent as CheckmarkIcon } from '../../../../../common/assets/checkmark.svg';
import styles from './Checkbox.module.scss';

interface IProps {
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	bigIcon?: boolean ;
};

const Checkbox: React.FunctionComponent<IProps> = ({ onChange, checked,bigIcon }: IProps) => {
	const [isChecked, setIsChecked] = useState<boolean>(checked || false);

	const handleChange = () => {
		if (onChange) {
			onChange(!isChecked);
		}

		setIsChecked(!isChecked);
	}

	// <input type="checkbox" onChange={handleChange} {...props} />

	const baseClass = isChecked ? `${styles.checkboxContainer} ${styles.checkboxChecked}` : styles.checkboxContainer;

	return (
		<div className={ `${bigIcon ? styles.bigCheckBox : ''} ${baseClass}`} onClick={handleChange}>
			{isChecked ? <CheckmarkIcon /> : null}
		</div >
	);
}

export default Checkbox;