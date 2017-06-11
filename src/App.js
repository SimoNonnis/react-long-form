// @flow
import React, { Component } from 'react';
import './app.css';

const options1 = ['orange', 'banana', 'mango', 'pear'];
const options2 = ['dog', 'tiger', 'cat'];
const name1 = 'fruits';
const name2 = 'animals';



// App component
export default class App extends Component {
  render() {
    return (
      <Form />
    );
  }
}


// Form component
class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      isValid: false
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSelection = this.onSelection.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log('Form submitted!');
  }

  onSelection(event) {
    const { name, value } = event.target;
    let { data } = this.state;
    data[name] = value;

    this.setState({
      data: data
    })
  }

  render() {
    const { isValid } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>React Long Form</h1>

        <RadioGroup
          optionsAvailables={options1}
          name={name1}
          onSelection={this.onSelection}
        />
        <RadioGroup
          optionsAvailables={options2}
          name={name2}
          onSelection={this.onSelection}
        />

        <button disabled={!isValid}>Save</button>
      </form>
    )
  }
}


// RadioGroup1 component
class RadioGroup extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isEmpty: true
      }

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
      this.setState({
        isEmpty: false
      })

      this.props.onSelection(event);
    }

    render() {
      const { optionsAvailables, name } = this.props;
      const { isEmpty } = this.state;
      const optionsGroup = optionsAvailables.map((option, i) => {
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
