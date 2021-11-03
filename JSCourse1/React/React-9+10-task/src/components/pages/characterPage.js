import React, { Component } from "react";
import ItemList from '../itemList/itemList';
import ItemDetails, {Field} from '../itemDetails/itemDetails';
import Error from '../error/error';
import gotService from '../../services/gotService';
import RowBlock from "../rowBlock/rowBlock";

export default class CharacterPage extends Component {

	gotService = new gotService();

	state = {
		selectedItem: null,
		error: false
	}

	componentDidCatch() {
		this.setState({ error: true })
	}

	onItemSelected = (url) => {
		this.setState({ selectedItem: url })
	}

	render() {

		if (this.state.error) {
			return <Error />
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllCharacters}
				renderItem={({ name, gender }) => `${name} (${gender})`} />
		)

		const itemDetails = (
			<ItemDetails
				itemUrl={this.state.selectedItem}
				getData={this.gotService.getCharacter} >
				<Field field='gender' label='Gender' />
				<Field field='born' label='Born' />
				<Field field='died' label='Died' />
				<Field field='culture' label='Culture'/>
				</ItemDetails>
				)

				return (
				<RowBlock left={itemList} right={itemDetails} />
				)
	}
}

// По умолчанию
// ItemList.defaultProps = {
// 	onItemSelected: () => {}
// }