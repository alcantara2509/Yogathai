import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Banner from './Banner';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        <Footer />
      </>
    )
  }
}

export default Home