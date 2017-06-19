/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import TagsList from './component';

const suggestedTags = [{ name: 'Land' }];

describe('Test <TagsList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TagsList
        suggestedTags={suggestedTags}
        handleAddition={function handleAddition() {}}
      />,
    );
  });

  it('should render a list of suggested tags', () => {
    expect(wrapper.containsMatchingElement(
      <ul>
        <li>
          <button>
            <span>Land</span>
            <span>Add</span>
          </button>
        </li>
      </ul>,
    )).toBe(true);
  });

  it('should check if "Add Tag" button has a function passed to onClick', () => {
    const tagButton = wrapper.find('button').first();

    expect(tagButton.prop('onClick')).toBeDefined();
  });
});
