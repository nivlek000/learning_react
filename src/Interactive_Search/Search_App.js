import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import InputField from './InputField.js';

class Search_App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '',
      dataSource: [
        'hello world',
        'foo',
        'bar',
        'hello',
        'John',
        'foot mat',
        'Jane',
        'book',
        'booked',
        'Doe',
        'jane doe'
      ],
      results: [],
      error: ''
    };
  }

  onChange = (event) => {
    const value = event.target.value
    this.updateState(value);
  }

  updateState = (value = '') => {
    this.setState({
      value: value ? value : '',
      results: this.filterDataSource(value),
    }, () => this.setState({error: value && this.state.results.length <= 0 && 'No result bro!!'}))
  }

  filterDataSource = (value) => {
    return value ? this.state.dataSource.filter((data) => {
      const reg =  new RegExp(value, 'gi');
      return data.match(reg);
    }) : [];
  }

  render() {
    const { value, results, error } = this.state;

    return (
      <div className="SearchApp">
        <div className="input-box">
          <InputField
              onChange={this.onChange}
              value={value}
          />

          <div className="data-sources">
            {
              results.map((data, index) => {
                return (
                  <p key={index}>
                    {index + 1} { data }
                  </p>
                )
              })
            }
            {
              error
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Search_App;
