import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import Main from './components/pages/Main.js';

import SearchPage from './components/pages/SearchPage.js';

import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ Main } />
        <Route exact path="/search" component={ SearchPage } />
      </div>
    )
    }
  }

export default BooksApp
