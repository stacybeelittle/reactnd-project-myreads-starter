import React from 'react'
import './App.css'

import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import Main from './components/pages/Main.js';

import SearchPage from './components/pages/SearchPage.js';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  organizeBooks(){
    BooksAPI.getAll()
    .then((books) => {
        this.setState({ books: books })
    })
  }

  componentDidMount(){
    this.organizeBooks()
  }


  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() =>
    {this.organizeBooks()
    })
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() =>(<Main 
        books={this.props.books}
        updateBook={this.props.updateBook}/>)}
        />
        <Route exact path="/search" render={() => ( <SearchPage books={this.props.books}
        updateBook={this.props.updateBook}/>
        )}
        />
      </div>
    )
    }
  }
 
export default BooksApp
