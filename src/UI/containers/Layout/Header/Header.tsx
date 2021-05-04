import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import styles from './Header.module.scss';
import {useLocation} from 'react-router-dom';



const Header =() => {
	const location = useLocation();
	const {t} = useTranslation();

	const linkKey=location.pathname //.replace("/", "").split("/")[0]
	const settingLinkKey = location.pathname.replace("/", "").split("/")[1] && location.pathname.replace("/", "").split("/")[1]

	return (
		<div className={styles.container}>
			<div>`routes{linkKey}`</div>
		</div>
	);
};

export default Header;
