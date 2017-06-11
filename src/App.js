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
      fieldErrors: {}
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.validate = this.validate.bind(this);

  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log('Form submitted!');
  }

  validate() {
    return true;
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>React Long Form</h1>

        <RadioGroup
          optionsAvailables={options1}
          name={name1}
        />
        <RadioGroup
          optionsAvailables={options2}
          name={name2}
        />

        <button disabled={this.validate()}>Save</button>
      </form>
    )
  }
}


// RadioGroup component
class RadioGroup extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isEmpty: true
      }
    }

    render() {
      const { optionsAvailables, name } = this.props;
      const { isEmpty } = this.state;
      const optionsGroup = optionsAvailables.map((option, i) => {
        return (
          <div key={i} >
            <input type="radio" name={name}/>
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
