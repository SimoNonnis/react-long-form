/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './component';

describe('Test <ErrorMessage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorMessage errorMessage="error message!" />);
  });

  it('should render an error message coming from props', () => {
    expect(wrapper.containsMatchingElement(<p>error message!</p>)).toBe(true);
  });
});
