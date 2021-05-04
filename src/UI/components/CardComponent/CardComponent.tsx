import React from 'react';
import styles from './CardComponent.module.scss';

interface IChildrenProps {
	children?: React.ReactNode;
}

interface ITitleProps {
	title?: React.ReactNode;
	titleStyle?: any;
}

interface IProps extends IChildrenProps, ITitleProps {
	className?: string;
	fullWidthBody?: boolean;
	loading?: boolean;
	titleStyle?: any;
}

// for x padding
export const CardContainer = (props: IChildrenProps) => {
	return <div className={styles.cardPaddingX}>{props.children}</div>
}

export const CardDivider = () => {
	return <div className={styles.cardSeperator} />;
}

export const CardTitle = (props: { children?: React.ReactNode, titleStyle?: any }) => {
	const { children, titleStyle } = props;

	if (!children) {
		return null;
	}

	return <div className={styles.cardTitle} style={titleStyle}>{children}</div>;
}

export const CardTitleWithDivider = (props: ITitleProps) => {
	const { title, titleStyle } = props;

	if (!title) {
		return null;
	}

	return (
		<CardContainer>
			<CardTitle titleStyle={titleStyle}>{title}</CardTitle>
			<CardDivider />
		</CardContainer>
	)
}

const CardBody = (props: IProps) => {
	const { fullWidthBody, loading, children } = props;
	if (loading) {
		return (
			<div className="d-flex justify-content-center align-items-center pt-3 m-4">
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	}

	if (fullWidthBody) {
		return (
			<div className={styles.cardBody}>
				{children}
			</div>
		);
	}

	return (
		<CardContainer>
			<div className={styles.cardBody}>
				{children}
			</div>
		</CardContainer>
	);
}

const CardComponent = (props: IProps) => {
	const { title, className, fullWidthBody, loading, titleStyle, children } = props;

	return (
		<div className={className ? `${styles.cardContainer} ${className}` : styles.cardContainer}>
			<CardTitleWithDivider title={title} titleStyle={titleStyle} />
			<CardBody fullWidthBody={fullWidthBody} loading={loading}>{children}</CardBody>
		</div >
	)
};

export { default as CardGroupRow } from './CardGroupRow';
export { default as CardGroupCol } from './CardGroupCol';
export default CardComponent;
