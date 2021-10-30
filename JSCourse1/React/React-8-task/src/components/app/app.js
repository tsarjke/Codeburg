import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import './app.css';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import Error from '../error/error';
import CharacterPage from '../characterPage/characterPage';


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
			randomChar = <RandomChar />;
			toggleBtnText = 'Hide';
		} else {
			toggleBtnText = 'Show';
		}

		return (
			<>
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
					<CharacterPage />
				</Container>
			</>
		);
	}
};