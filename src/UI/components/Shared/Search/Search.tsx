import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Search.module.scss';
import Input from '../../Shared/forms/Input/Input';


interface IProps {
	onChange: any;
	onSubmit?: any;
	value: string;
	block?: boolean;
}

const Search = (props:IProps) => {
	const { onChange, onSubmit, value, block = false} = props;
	const { t } = useTranslation();

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (onSubmit) {
			onSubmit(e);
		}
	};

	return (
		<form className={`${styles.inputSearch} ${block && styles.block}`} onSubmit={handleOnSubmit}>
			<Input placeholder={t('Search') + '....'} value={value} className={`form-control' ${styles.input}`} onChange={onChange} />
			<span className={styles.searchIcon}><i className='fas fa-search' /></span>
		</form>
	);
};
export default Search;
