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
      data: {}
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSelection1 = this.onSelection1.bind(this);
    this.onSelection2 = this.onSelection2.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log('Form submitted!');
  }

  isValid() {
    return false;
  }

  onSelection1(event) {
    const { name, value } = event.target;
    let { data } = this.state;
    data[name] = value;

    this.setState({
      data: data
    })
  }

  onSelection2(event) {
    const { name, value } = event.target;
    let { data } = this.state;
    data[name] = value;

    this.setState({
      data: data
    })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>React Long Form</h1>

        <RadioGroup
          optionsAvailables={options1}
          name={name1}
          onSelection={this.onSelection1}
        />
        <RadioGroup
          optionsAvailables={options2}
          name={name2}
          onSelection={this.onSelection2}
        />

        <button disabled={!this.isValid()}>Save</button>
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
    }

    render() {
      const { optionsAvailables, name, onSelection } = this.props;
      const { isEmpty } = this.state;
      const optionsGroup = optionsAvailables.map((option, i) => {
        return (
          <div key={i} >
            <input
              type="radio"
              name={name}
              value={option}
              onChange={onSelection}
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
