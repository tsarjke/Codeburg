import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import './app.css';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import Error from '../error/error';
import { CharacterPage, HousesPage, BookPage, BooksItem } from '../pages';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


export default class App extends Component {

	state = {
		showRandomChar: true,
		error: false
	}

	componentDidCatch() {
		this.setState({ error: true });
	}

	toggleRandomChar = () => {
		this.setState(({ showRandomChar }) => { return { showRandomChar: !showRandomChar } })
	}

	render() {
		const { showRandomChar, error } = this.state;

		if (error) {
			return <Error />
		}

		let randomChar, toggleBtnText;

		if (showRandomChar) {
			randomChar = <RandomChar interval={4000} />;
			toggleBtnText = 'Hide';
		} else {
			toggleBtnText = 'Show';
		}

		return (
			<Router>
						<div className="app">
							<Container>
								<Header />
							</Container>
							<Container>
								<Row>
									<Col lg={{ size: 5, offset: 0 }}>
										{randomChar}
										<button className="toggle-btn btn btn-info" onClick={this.toggleRandomChar}>{toggleBtnText} random character</button>
									</Col>
								</Row>
								<Switch>
									<Route path='/' exact component={CharacterPage} />
									<Route path='/characters' exact component={CharacterPage} />
									<Route path='/houses' exact component={HousesPage} />
									<Route path='/books' exact component={BookPage} />
									<Route path='/books/:id' exact render={({ match }) => {
										const { id } = match.params;
										return <BooksItem bookId={id} />
									}
									} />
									<Route component={NoMatchPage} />
								</Switch>
							</Container>
						</div>
			</Router>
		);
	}
};

class NoMatchPage extends Component {

	state = {
		referrer: null
	}
	onClick = () => {
		this.setState({ referrer: '/' });
	}

	render() {
		const { referrer } = this.state;

		if (referrer) {
			return <Redirect to={referrer} />;
		}

		return (
			<div className="wrong">
				<h3 className="wrong-h"><span>Page does not exist</span></h3>
				<button className="btn btn-danger" onClick={this.onClick}>Click to go to main page</button>
			</div>
		);
	}
};