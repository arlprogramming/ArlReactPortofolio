import React from 'react'
import '../home/home.css'
import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <section id='home'>
      <div className="Home__App">
      <header className="Home__Header">
        <img src={logo} className="Home__logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>
    </section>
  )
}

export default Home