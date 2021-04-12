import React, { Component } from 'react';

import Header from './headerNavbar/header';
import Navbar from './headerNavbar/navbar';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default Layout;