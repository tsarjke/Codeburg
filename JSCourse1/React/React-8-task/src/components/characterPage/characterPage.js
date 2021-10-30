import React, { Component } from "react";
import { Col, Row } from 'reactstrap';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import Error from '../error/error';

export default class CharacterPage extends Component {

	state = {
		selectedChar: null,
		error: false
	}

	componentDidCatch() {
		this.setState({ error: true })
	}

	onCharSelected = (url) => {
		this.setState({ selectedChar: url })
	}

	render() {

		if (this.state.error) {
			return <Error />
		}

		return (
			<Row>
				<Col md='6'>
					<ItemList onCharSelected={this.onCharSelected} />
				</Col>
				<Col md='6'>
					<CharDetails charUrl={this.state.selectedChar} />
				</Col>
			</Row>
		)
	}
}