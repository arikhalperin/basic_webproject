import * as React from 'react';
import styles from './ModalComponent.module.scss';
import Modal from 'react-bootstrap/cjs/Modal';
import {useTranslation} from 'react-i18next';
import {ReactComponent as CloseIcon} from '../../../../common/assets/close_icon.svg';
import LoaderComponent from '../LoaderComponent/LoaderComponent';

interface IProps {
	show: boolean;
	isLoading?: boolean;
	heading: string;
	children: any;
	onClose: Function;
	size?: 'lg' | 'sm' | 'xl';
}

const ModalComponent = (props: IProps) => {
	const { show = false, heading, children, onClose, size = 'lg', isLoading = false} = props;
	const {t} = useTranslation();


	return (
		<Modal
			show={show}
			size={size}
			aria-labelledby="contained-modal-title-vcenter"
			centered
			onHide={onClose}
		>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">{heading}</Modal.Title>
				<div onClick={() => onClose()}><CloseIcon style={{fill: "#000", cursor: 'pointer'}}/></div>
			</Modal.Header>
			<Modal.Body className={styles.bodyModal}>
				{children}
				{isLoading && <LoaderComponent/>}
			</Modal.Body>
		</Modal>
	);
};

export default ModalComponent;
