import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <section className='header-content'>
        <section className='header-links'>
          <Link className='links' to='/'>Home</Link>
          <Link className='links' to='/about'>Sobre</Link>
          <Link className='links' to='/classes'>Aulas</Link>

          <Link className='logo' to='/'></Link>
          
          <Link className='links' to='/oils'>Óleos</Link>
          <Link className='links' to='/faq'>FAQ</Link>
          <Link className='links' to='/blog'>Blog</Link>
        </section>
      </section>
    )
  }
}

export default Header