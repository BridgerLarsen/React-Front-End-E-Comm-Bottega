import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faMinus,
  faTimes,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

import Header from './headerNavbar/header';
import Navbar from './headerNavbar/navbar';

library.add(faPlus, faMinus, faTimes, faShoppingCart);

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