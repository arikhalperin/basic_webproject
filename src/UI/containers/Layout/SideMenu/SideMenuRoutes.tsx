import React from 'react';
import {useLocation} from 'react-router-dom';



// base links
import {ReactComponent as MicrosoftIcon} from '../../../../common/assets/microsoft.svg';
import {ReactComponent as TeslaIcon} from '../../../../common/assets/tesla.svg';
import {ReactComponent as GoogleIcon} from '../../../../common/assets/google.svg';
import {ReactComponent as WelcomeIcon} from '../../../../common/assets/welcome.svg';


import {RoutesUrl} from "../../../../common/consts/Routes";


export interface Route {
	link: string;
	icon: React.ReactNode;
	childs?: Route[];
	parent?: Route;
	isChild?: boolean;
	showFilters?: boolean;
}

export const routesConfigBase: Route[] = [
	{
		link: RoutesUrl.welcome,
		icon: <WelcomeIcon />
	},
	{
		link: RoutesUrl.google,
		icon: <GoogleIcon />
	},
	{
		link: RoutesUrl.microsoft,
		icon: <MicrosoftIcon />
	},
	{
		link: RoutesUrl.tesla,
		icon: <TeslaIcon/>
	}

];

function getRoutes() {
	const routes = routesConfigBase;

	routes.forEach(route => {
		if (route.childs && route.childs.length) {
			route.childs.forEach(child => {
				child.isChild = true;
			});
		}
	});

	return routes;
}

export const routesConfig = getRoutes();

export function routeMatchPath(route: Route, path: string) {
	if (!route.link || !route.link.length) {
		return false;
	}

	return route.link === path || route.link.replace('/', '') === path.replace('/', '');
}

export function findRouteByPath(path: string): Route | undefined {
	let foundRoute: Route | undefined = undefined;

	routesConfig.forEach((route) => {
		if (routeMatchPath(route, path)) {
			foundRoute = route;
		}

		if (route.childs && route.childs.length) {
			const activeChild = route.childs.find(child => routeMatchPath(child, path));

			if (activeChild) {
				activeChild.parent = route;
				foundRoute = activeChild;
			}
		}
	});

	return foundRoute;
}

export const useActiveRoute = () => {
	const location = useLocation();
	const activeRoute = findRouteByPath(location.pathname);
	return activeRoute;
};

export const useIsRouteActive = (route: Route | undefined) => {
	const activeRoute = useActiveRoute();

	if (!route) {
		return false;
	}

	const isActive = (route: Route) => {
		// parent of active route is also active
		if (activeRoute && route === activeRoute.parent) {
			return true;
		}

		// exact route is active
		return route === activeRoute;
	};

	return isActive(route);
};
