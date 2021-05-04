import React, {useState} from 'react';
import {Collapse} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import styles from './SideMenu.module.scss';
import {Route, routesConfig, useIsRouteActive} from './SideMenuRoutes';


// route that has dropdown for the children
const RouteItemWithChilds = (props: {route: Route | undefined}) => {
	const {t} = useTranslation();
	const isParentActive = useIsRouteActive(props.route);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const {route} = props;

	if (!route || !route.childs || !route.childs.length) {
		return null;
	}

	const handleDropdownClick = (e) => {
		e.preventDefault();
		setDropdownOpen(!dropdownOpen);
	};

	const linkKey = route.link.replace('/', '').replace('/', '.');
	const settingsRouteActive = isParentActive;
	const childElements = route.childs.map((child) => {
			const routeItem =  <RouteItem key={child.link} route={child} />;
			return routeItem;
		},
	);

	return (
		<div>
			<div
				className={`${styles.navLink}  ${dropdownOpen ? styles.childrenDropdown : ''} ${settingsRouteActive ? styles.active : ''}`}>
				<span className={styles.linkIcon}>{route.icon}</span>
				<a href="#settings" onClick={handleDropdownClick}>
					<span>linkKey</span>
				</a>
			</div>
			<div>
				<div className={styles.dropdownDividerTop} hidden={!dropdownOpen} />
				<Collapse in={dropdownOpen}>
					<div>
						{childElements}
					</div>
				</Collapse>
				<div className={styles.dropdownDividerBottom} hidden={!dropdownOpen} />
			</div>
		</div>
	);
};

const RouteItem = (props: {route: Route | undefined}) => {
	const {route} = props;
	const isActive = useIsRouteActive(props.route);

	if (!route) {
		return null;
	}

	const linkKey = route.link.replace('/', '').replace('/', '.');

	// normal route
	return (
		<div className={`${styles.navLink} ${route.isChild ? styles.childLink : ''} ${isActive ? styles.active : ''}`}>
			<Link to={route.link}>
				<span className={styles.linkIcon}>{route.icon}
				</span>
			</Link>
		</div>
	);
};

const SideMenu = () => {

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.navLinks}>
					{routesConfig.map((route) => {
						return <RouteItem key={route.link} route={route} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
