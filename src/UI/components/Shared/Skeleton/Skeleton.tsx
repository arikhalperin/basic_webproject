import React from "react";
import styles from './Skeleton.module.scss';

interface IProps {
	count?: number;
	duration?: number;
	delay?: number;
	width?: string;
	height?: string;
	minWidth?: string;
	minHeight?: string;
	circle?: boolean;
	hidden?: boolean;
	className?: string;
	style?: any;
	transparent?: boolean;
}
export default function Skeleton(props: IProps) {
	const { count, duration, delay, width, height, minWidth, minHeight, circle, hidden, className, style, transparent } = props;
	const elements: React.ReactNode[] = [];
	const skeletonClass = transparent ? styles.skeletonTransparent : styles.skeleton;
	const baseClass = className ? `${className} ${skeletonClass}` : skeletonClass;

	if (hidden) {
		return null;
	}

	let styleTemp: any = style || {};

	if (width !== null) {
		styleTemp.width = width;
	}

	if (height !== null) {
		styleTemp.height = height;
	}

	if (minWidth !== null) {
		styleTemp.minWidth = minWidth;
	}

	if (minHeight !== null) {
		styleTemp.minHeight = minHeight;
	}

	if (width !== null && height !== null && circle) {
		styleTemp.borderRadius = "50%";
	}

	if (duration) {
		styleTemp.animationDuration = `${duration}s`;
	}

	if (delay) {
		styleTemp.animationDelay = `${delay}s`;
	}

	// const randDelay = parseInt(Math.random() * 100) / 100;
	// style.animationDelay = `${rand}s`;

	for (let i = 0; i < (count || 1); i++) {
		elements.push(<span key={i} className={baseClass} style={styleTemp}>&zwnj;</span>);
	}

	return (
		<>
			{elements}
		</>
	);
}

Skeleton.defaultProps = {
	count: 1,
	duration: null,
	width: null,
	wrapper: null,
	height: null,
	circle: false
};
