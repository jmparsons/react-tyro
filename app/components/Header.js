import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>Header </div>
    );
  }
}

const headerStyle = {
  color: 'white',
  backgroundColor: '#000',
  padding: '10px'
};