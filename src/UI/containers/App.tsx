import {observer, Provider} from 'mobx-react';
import * as React from 'react';
import {useEffect, useState} from 'react';
import BlockUi from 'react-block-ui';
import {BrowserRouter, Redirect, Route, Switch, useLocation} from 'react-router-dom';
import {LoadingProvider} from "../react-contexts/LoadingContext"
import {RoutesUrl} from "../../common/consts/Routes";
import rootStores from "../../BL/stores";
import Layout from "./Layout/Layout";
import styles from './App.module.scss';
import toastComponent from '../components/Shared/ToastComponent/ToastComponent';
import WelcomePage from "./stocks/WelcomePage";
import TeslaPage from "./stocks/TeslaPage";
import GooglePage from "./stocks/GooglePage";
import MicrosoftPage from "./stocks/MicrosoftPage";


const App = observer(() => {
	// Those `initUserLoading & setInitUserLoading` are used ONLY 1 TIME!
	// when we try to get the currentUser for the current session
	// look at function `getCurrentAdminAndRedirect` in the `finally` scope
	const [finishedInitCurrentUser, setFinishedInitCurrentUser] = useState(false);

	// This loading state is in order to "manage" to BlockUi component
	// It should help us when we want to prevent the user to interact the website (loading when API requests sent etc...)
	// At the start of the app, this state is at "false" because is already stopped by the `initUserLoading` state
	const [loading, setLoading] = useState(false);


	const PublicRoutes = () => {
		return (
			<Switch>
				{/* Auth pages */}
				<Route path={RoutesUrl.welcome} exact={true} component={WelcomePage} />
				<Route path={RoutesUrl.google} exact={true} component={GooglePage} />
				<Route path={RoutesUrl.tesla} exact={true} component={TeslaPage}/>
				<Route path={RoutesUrl.microsoft} exact={true} component={MicrosoftPage}/>
			</Switch>
		);
	};


	const Routes = () => {
		return <PublicRoutes />;
	};

	// TEMP LOGIC to swtich between layout of login user and not login user
	const tempLayoutLogic = () => {
		return (
			(<Layout>{routes()}{toastComponent()}</Layout>)
		);
	};

	const routes = () => <Routes />;


	return (
		<Provider {...rootStores}>
			<BrowserRouter>
				{/* Provide the LoadinContext to BlockUi and any child components */}
				<LoadingProvider value={{loading, setLoading}}>
					<BlockUi className={styles.blockUi} blocking={loading} renderChildren={true}>
						{tempLayoutLogic()}
					</BlockUi>
				</LoadingProvider>
			</BrowserRouter>
		</Provider>
	);
});

export default App;
