import React, {Component, ReactNode, useState} from 'react';
import styles from './Switch.module.scss';
import Form from 'react-bootstrap/cjs/Form';

interface IProps {
	id?: string;
	icon?: ReactNode;
	checked?: boolean;
	label?: string;
	colorClass?: string;
	onChange?: (checked: boolean) => void;
}

const Switch: React.FunctionComponent<IProps> = (props: IProps) => {
	const {id, icon, onChange, colorClass = '', checked, label = ''} = props;
	const [isChecked, setIsChecked] = useState<boolean>(checked || false);

	const handleChange = () => {
		if (onChange) {
			onChange(!isChecked);
		}

		setIsChecked(!isChecked);
	};

	return (
		<Form.Check
			onChange={handleChange}
			type="switch"
			checked={checked}
			id={id || label}
			inline
			className={`${styles.customSwitch} ${colorClass}`}
			label={
				<span>
					<span style={{margin: 5}}>{icon || ''}</span>
					<span>{label}</span>
				</span>
			}
		/>
	);
};

export default Switch;
