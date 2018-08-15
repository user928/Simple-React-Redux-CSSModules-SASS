import { Controls } from './Controls';

describe('Controls component', () => {
	it('renders correctly', () => {
		const wrapper = render(<Controls />);

		expect(wrapper).toMatchSnapshot();
	});

	it('find reset txt', () => {
		const wrapper = mount(<Controls />);
		const resetTxt = wrapper.find('[data-ui="resetBtn"]').text();
		expect(resetTxt).toBe('Reset');
	});

	it('click on increment once', () => {
		const spy = sinon.spy();
		const wrapper = mount(<Controls increment={spy} />);

		wrapper.find('[data-ui="incrementBtn"]').simulate('click');
		expect(spy.calledOnce).toBe(true);
	});
});
