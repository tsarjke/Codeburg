import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import './app.css';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import Error from '../error/error';


export default class App extends Component {

	state = {
		showRandomChar: true,
		error: false
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
					<Row>
						<Col md='6'>
							<ItemList />
						</Col>
						<Col md='6'>
							<CharDetails />
						</Col>
					</Row>
				</Container>
			</>
		);
	}
};