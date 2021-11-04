import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { bindActionCreators } from 'redux';

const Counter = ({ counter, inc, dec, res }) => {
	return (
		<main className="main">
			<div className="counter">
				<h1 id="counter">{counter}</h1>
			</div>
			<div className="btns">
				<button id="inc" onClick={inc}><img src="Plus.svg" alt="" /></button>
				<button id="dec" onClick={dec}><img src="Minus.svg" alt="" /></button>
				<button id="res" onClick={res}><img src="Reset.svg" alt="" /></button>
			</div>
		</main>
	);
};
const mapStateToProps = (state) => {
	return {
		counter: state
	}
}
// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators(actions, dispatch);
// }
export default connect(mapStateToProps, actions)(Counter);