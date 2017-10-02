import React from 'react';
import { shallow } from 'enzyme';
import Counter from './';

describe('Counter', () => {
  it('renders without crashing', () => {
    shallow(<Counter />);
  });
});