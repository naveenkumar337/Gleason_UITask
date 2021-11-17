import React, { useContext } from 'react';
import { GlobalContext } from '../StateManagement/Context';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoginPage from './Login/LoginPage';
import { SideBar } from './DashBoard/SideBar';
export default function HomeIndex() {
	const context = useContext(GlobalContext);
    const history = createBrowserHistory();
	console.log(context);
	return (
		<Router history={history}>
			<div>{!context.state.isLogedIn ? <LoginPage /> : <SideBar />}</div>
		</Router>
	);
}
