//import React, { Component } from 'react';
import React from 'react';
import logo from './logo_todo.svg';
import './App.css';
import Welcome from './ReactLesson.js';
import TodoListt from './Todo_List/TodoList.js';
import SearchAppp from './Interactive_Search/Search_App.js';
import ImageAppp from './devC-day3/Image_App.js';
import PhotoGallery from './devC-day4/Photo-Gallery.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React 101</h1>
        </header>
        <Welcome user = "Sam"/>
        <hr /><hr />
        <TodoListt />
        <hr /><hr />
        <SearchAppp />
        <hr /><hr />
        <ImageAppp />
        <hr /><hr />
        <PhotoGallery />
        <hr /><hr />
      </div>
    );
  }
}

export default App;
