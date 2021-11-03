import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import './app.css';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import Error from '../error/error';
import { CharacterPage, HousesPage, BookPage, BooksItem }from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';


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
			randomChar = <RandomChar interval={4000}/>;
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
						<Route path='/characters' component={CharacterPage} />
						<Route path='/houses' component={HousesPage} />
						<Route path='/books' exact component={BookPage} />
						<Route path='/books/:id' render={({ match }) => {
							const { id } = match.params;
							return <BooksItem bookId={id} />
						}
						} />
					</Container>
				</div>
			</Router>
		);
	}
};