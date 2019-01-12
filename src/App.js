import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name='Timur' surname='Gafiulin' link='habr.com' />
        <SayFullName name='Albert' surname='Gubkin' link='habr.com' />
        <SayFullName name='Anna' surname='Shamova' link='habr.com' />
      </div>
    );
  }
}


function SayFullName (props) {
  return (
      <div>
        <h1>My name is {props.name}, surname - {props.surname}</h1>
        <a href={props.link}>Link to my profile</a>
      </div>
    )
}


export default App;
