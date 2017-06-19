import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTags from 'react-tokenized-input';
import isLength from 'validator/lib/isLength';
import matches from 'validator/lib/matches';
import uniqBy from 'lodash.uniqby';
import some from 'lodash.some';


import ErrorMessage from './ErrorMessage/component';
import TagsList from './TagsList/component';


class Tags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInValid: null,
      errorMessage: '',
      selectedTags: [],
      suggestedTags: this.props.suggestedTags,
    };

    this.handleAddition = this.handleAddition.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps() {
    // ToDo

  }

  componentDidUpdate() {
    const { selectedTags } = this.state;
    const { handleSelectedTags } = this.props;

    handleSelectedTags(selectedTags);
  }

  handleAddition(tag) {
    let { errorMessage } = this.state;
    const { selectedTags } = this.state;
    const { minChar, maxChar, maxTags, typeOfTags } = this.props;
    const currenTag = tag;
    const trimmedTag = currenTag.name.trim().toString();
    const isSyntaxValid = matches(trimmedTag, /^[\d\w\s/+\-_]+$/);
    const isTagValid =
      isLength(trimmedTag, { min: minChar, max: maxChar }) &&
      selectedTags.length !== maxTags &&
      isSyntaxValid;

    currenTag.name = trimmedTag;

    if (isTagValid) {
      const tagslist = [...selectedTags, currenTag];
      const uniqueTagsList = uniqBy(tagslist, 'name');

      this.setState({
        selectedTags: uniqueTagsList,
      });
    }

    // Error messaging section
    if (trimmedTag.length < minChar) {
      errorMessage = `Please type at least ${minChar} characters.`;
    } else if (!isSyntaxValid) {
      errorMessage = 'Please check your syntax! Some of your characters are not valid.';
    } else if (trimmedTag.length > maxChar) {
      errorMessage = `Sorry, a max of ${maxChar} characters is allowed.`;
    } else if (selectedTags.length === maxTags) {
      errorMessage = `Sorry, the maximum number of ${typeOfTags} is ${maxTags}.`;
    } else if (some(selectedTags, { name: trimmedTag })) {
      errorMessage = 'This tag has already been added.';
    } else {
      errorMessage = null;
    }

    this.setState({
      errorMessage,
    });
  }

  handleDelete(i) {
    const { selectedTags } = this.state;
    const { maxTags } = this.props;
    const tagslist = selectedTags.slice(0);
    let { errorMessage } = this.state;

    tagslist.splice(i, 1);

    // Error messaging section
    if (selectedTags.length - 1 < maxTags) {
      errorMessage = null;
    }

    this.setState({
      selectedTags: tagslist,
      errorMessage,
    });
  }

  render() {
    const { suggestedTags, selectedTags, errorMessage } = this.state;
    const { customStyles, placeHolderText, minTags, maxTags, typeOfTags } = this.props;
    return (
      <div>
        {minTags && <p>Select a minimum of {minTags} and a maximum of {maxTags} {typeOfTags}.</p>}

        <ReactTags
          suggestions={suggestedTags}
          tags={selectedTags}
          handleAddition={this.handleAddition}
          handleDelete={this.handleDelete}
          placeholder={placeHolderText}
          allowNew
          minQueryLength={1}
          classNames={customStyles}
        />
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        {suggestedTags && <TagsList
          suggestedTags={suggestedTags}
          handleAddition={this.handleAddition}
        />}
      </div>
    );
  }
}

Tags.propTypes = {
  suggestedTags: PropTypes.arrayOf(PropTypes.object),
  placeHolderText: PropTypes.string,
  handleSelectedTags: PropTypes.func.isRequired,
  minChar: PropTypes.number,
  maxChar: PropTypes.number,
  minTags: PropTypes.number,
  maxTags: PropTypes.number,
  typeOfTags: PropTypes.string.isRequired,
};

Tags.defaultProps = {
  suggestedTags: [],
  placeHolderText: null,
  minChar: 3,
  maxChar: 30,
  minTags: null,
  maxTags: 10,
};

export default Tags;
