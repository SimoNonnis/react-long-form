// @flow
import React, { Component } from 'react';

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
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log('Form submitted!');
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>React Long Form</h1>

        <RadioGroup optionsAvailables={options1} name={name1} />
        <RadioGroup optionsAvailables={options2} name={name2} />

        <button>Save</button>
      </form>
    )
  }
}


// RadioGroup component
class RadioGroup extends Component {
  render() {
    const { optionsAvailables } = this.props;
    const { name } = this.props;
    const optionsGroup = optionsAvailables.map((option, i) => {
      return (
        <div key={i} >
          <input type="radio" name={name}/>
          <label>{option}</label>
        </div>
      )

    })
    return (
      <div>{optionsGroup}</div>
    )
  }
}
