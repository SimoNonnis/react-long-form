/* eslint-env jest */
import React from 'react';
import ReactTags from 'react-tokenized-input';
import { mount } from 'enzyme';

import Tags from './index';

const customStyles = {};
const typeOfTags = 'Key features';
function handleSelectedTags() {}

describe('Test <Tags />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Tags
        customStyles={customStyles}
        typeOfTags={typeOfTags}
        handleSelectedTags={handleSelectedTags}
      />,
    );
  });

  it('should check if required prop with css styles is present', () => {
    expect(wrapper.props().customStyles).toEqual({});
  });

  it('should check if required prop typeOfTags is present', () => {
    expect(wrapper.props().typeOfTags).toEqual(typeOfTags);
  });

  it('should check if required prop handleSelectedTags() is present', () => {
    expect(wrapper.props().handleSelectedTags).toEqual(handleSelectedTags);
  });

  it('should find ReactTags component', () => {
    expect(wrapper.find(ReactTags).length).toEqual(1);
  });

  it('should find ReactTags component', () => {
    expect(wrapper.find(ReactTags).length).toEqual(1);
  });

  it('should find <input /> inside ReactTags component', () => {
    expect(wrapper.containsMatchingElement(<input />)).toBe(true);
  });
});
