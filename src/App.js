import React from 'react'
import './App.css'

import { Route } from 'react-router-dom'



import Main from './components/pages/Main.js';

import SearchPage from './components/pages/SearchPage.js';

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
