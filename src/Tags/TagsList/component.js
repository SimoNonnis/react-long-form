import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';


function TagsList({ suggestedTags, handleAddition }) {
  function handleOnClick(event) {
    event.preventDefault();

    handleAddition({ name: event.currentTarget.value });
  }

  return (
    <ul className="tagsList">
      {suggestedTags.map(tag => (
        <li key={uniqueId()} >
          <button
            className="tagButton"
            value={tag.name}
            onClick={handleOnClick}
          >
            <span>{tag.name}</span>
            <span className="tagButtonAdd">Add</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

TagsList.propTypes = {
  suggestedTags: PropTypes.arrayOf(PropTypes.object),
  handleAddition: PropTypes.func.isRequired,
};

TagsList.defaultProps = {
  suggestedTags: [],
};

export default TagsList;
