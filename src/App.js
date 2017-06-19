// @flow
import React, { Component } from 'react';
import TagsDemo from './Tags/demo.js';
import styled from 'styled-components';

import './app.css';

const options1 = ['orange', 'banana', 'mango', 'pear'];
const options2 = ['dog', 'tiger', 'cat'];
const names = ['fruits', 'animals'];



// App component
export default class App extends Component {
  render() {
    return (
      <StyledForm />
    );
  }
}


// Form component
class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      completedFields: [],
      missingFields: [],
      isValid: false
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSelection = this.onSelection.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const { completedFields } = this.state;
    const namesSet = new Set(names);
    const completedFieldsSet = new Set(completedFields);
    const notCompletedSections = new Set(
      [...namesSet].filter(x => !completedFieldsSet.has(x))
    );

    this.setState({
      missingFields: [...notCompletedSections]
    })

    if (notCompletedSections.size === 0) {
      this.setState({
        isValid: true,
        missingFields: []
      })
      console.log('ALL GOOD, FORM SUBMITTED!');
    }
  }

  onSelection(event) {
    const { name, value } = event.target;
    let { data, completedFields } = this.state;
    data[name] = value;

    if (!completedFields.includes(name)) {
      completedFields.push(name);
    }

    this.setState({
      data: data,
      completedFields: completedFields,
      missingFields: []
    })
  }

  render() {
    const { missingFields } = this.state;
    const { className } = this.props;
    return (
      <form className={className} onSubmit={this.onFormSubmit}>
        <h1>React Long Form</h1>

        <RadioGroup
          optionsAvailable={options1}
          name={names[0]}
          onSelection={this.onSelection}
          missingFields={missingFields}
        />
        <RadioGroup
          optionsAvailable={options2}
          name={names[1]}
          onSelection={this.onSelection}
          missingFields={missingFields}
        />
        <TagsDemo />

        <button >Save</button>
      </form>
    )
  }
}

const StyledForm = styled(Form)`
  color: tomato;
`;


// RadioGroup1 component
class RadioGroup extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isEmpty: null
      }

      this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps({ missingFields, name }) {
      if ([...missingFields].includes(name)) {
        this.setState({
          isEmpty: true
        })
      }
    }

    handleChange (event) {
      this.setState({
        isEmpty: false
      })

      this.props.onSelection(event);
    }

    render() {
      const { optionsAvailable, name } = this.props;
      const { isEmpty } = this.state;
      const optionsGroup = optionsAvailable.map((option, i) => {
        return (
          <div key={i} >
            <input
              type="radio"
              name={name}
              value={option}
              onChange={this.handleChange}
            />
            <label>{option}</label>
          </div>
        )
      });

      return (
        <div className="section" >
          {optionsGroup}
          {isEmpty && <p className="isEmpty" >Please, choose an option</p>}
        </div>
      )
    }
}
