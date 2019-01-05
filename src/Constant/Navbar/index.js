import React, { Component } from 'react';
import Header from './Header';
import SubHeader from './SubHeader';

export default class Navbar extends Component {
  render() {
    return (
      <div >
        <Header />
        <SubHeader />
      </div>
    );
  }
}

