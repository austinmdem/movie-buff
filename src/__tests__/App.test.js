import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App component testing', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
