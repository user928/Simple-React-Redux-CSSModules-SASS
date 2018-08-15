import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { decrementNum, incrementNum, resetCounter } from '../../Redux/actionCreators/counterActions';
import styles from './Controls.module.css';

export class Controls extends React.Component {
	static propTypes = {
		increment: PropTypes.func,
		decrement: PropTypes.func,
		resetCount: PropTypes.func,
		resetLabel: PropTypes.string,
		incrementLabel: PropTypes.string,
		decrementLabel: PropTypes.string,
	};

	render() {
		return (
			<div className={styles.controls}>
				<div className={styles.controlAction} data-ui="decrementBtn" onClick={this.props.decrement}>
					-
				</div>

				<div className={styles.controlAction} data-ui="resetBtn" onClick={this.props.resetCount}>
					Reset
				</div>

				<div className={styles.controlAction} data-ui="incrementBtn" onClick={this.props.increment}>
					+
				</div>
			</div>
		);
	}
}

export const mapDispatchToProps = dispatch => ({
	increment: () => dispatch(incrementNum()),
	decrement: () => dispatch(decrementNum()),
	resetCount: () => dispatch(resetCounter()),
});

export default connect(
	null,
	mapDispatchToProps
)(Controls);
