import * as React from 'react';
import styles from './DropdownComponent.module.scss';
import Dropdown from 'react-bootstrap/cjs/Dropdown';

interface IProps {
	text: string;
	items: {text: string, onClick?: Function, disabled?: boolean}[];
	itemColor?:string
	className?: any
};

const DropdownComponent = (props: IProps) => {
	const { text, items, itemColor, className } = props;


	return (
		<Dropdown>
			<Dropdown.Toggle className={`${styles.customDropdown} ${className}`}>
				{text}
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{
					items.map(item => {
						return (
							<Dropdown.Item
								disabled={item.disabled || false}
								onClick={() => item?.onClick?.()}
								className={itemColor==='light' ? styles.lightGrey: ''}
								key={`dropdown_${item.text}`}>
								{item.text}
							</Dropdown.Item>
						)
					})
				}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default DropdownComponent;
