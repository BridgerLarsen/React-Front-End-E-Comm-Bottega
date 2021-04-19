import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons';

import Header from './headerNavbar/header';
import Navbar from './headerNavbar/navbar';

library.add(faPlus, faMinus);

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header />
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;