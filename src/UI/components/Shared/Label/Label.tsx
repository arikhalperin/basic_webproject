import React from 'react';
import {observer} from 'mobx-react';
import styles from './Label.module.scss';

interface IProps {
	text: string
}

const Label = observer((props: IProps) => {

	const {text} = props;

	return (
		<div className={styles.label_container}>
			<label className={styles.custom_label}>{text}</label>
		</div>
	);
});

export default Label;