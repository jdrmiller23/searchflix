import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import SearchMovies from './searchMovies';
import reportWebVitals from './reportWebVitals';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Searchflix - a react app</h1>
        </header>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
