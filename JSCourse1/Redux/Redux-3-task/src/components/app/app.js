import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import WithRestoSerivce from '../hoc/';
import Background from './food-bg.jpg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = ({ RestoService }) => {
	console.log(RestoService.getResource());
	return (
		<div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
			<Router>
				<AppHeader total={50} />
				<Switch>
					<Route path='/' exact component={MainPage} />
					<Route path='/cart' component={CartPage} />
					<Route exact component={MainPage} />
				</Switch>
			</Router>
		</div>
	)
}

export default WithRestoSerivce()(App);