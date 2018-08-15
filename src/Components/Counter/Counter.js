import React from 'react';
import { connect, Provider } from 'react-redux';
import store from '../../Redux/store';
import PropTypes from 'prop-types';
import SVGIcon from '../SVGIcon/SVGIcon';
import Controlls from '../Controls/Controls';
import styles from './Counter.module.css';

export class _Counter extends React.Component {
	static propTypes = {
		count: PropTypes.number,
	};

	static defaultProps = {
		count: 0,
	};

	render() {
		const { count } = this.props;

		return (
			<div className={styles.counter}>
				<div className={styles.countNmb}>{count}</div>
				<Controlls />
				<hr />

				<span className={styles.svgIconExample}>
					<SVGIcon icon="wrench" wrapperClassName="ExampleClassName" size={80} />
					Svg Icon example
				</span>
			</div>
		);
	}
}

export const mapStateToProps = store => {
	return {
		count: store.count,
	};
};

const Counter = connect(
	mapStateToProps,
	null
)(_Counter);

export default class extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Counter {...this.props} />
			</Provider>
		);
	}
}
