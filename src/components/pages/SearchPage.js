import React from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../../BooksAPI';

import Main from './Main';

import Book from '../Book';


class SearchPage extends React.Component {
    state={
        query: '',
        results: []
    }
    /*constructor(props){
        super(props);
        this.state = {
            books: [],
            results: [],
            query: ""
        }
    }
    /*Figure out how to Link to Main here. Until then, state will not be set*/
    /*componentDidMount(){
        BooksAPI.getAll()
        .then((books) => {
            this.setState({ books });
        });
    }*/
    
    updateQuery = (query) => {
        this.setState({query: query}, this.submitSearch);
    }
    
    submitSearch() {
        if(this.state.query === "" || this.state.query === undefined) {
            return this.setState({ results: [] });
        }

        BooksAPI.search(this.state.query.trim()).then(res => {
            if(res.error) {
                return this.setState({ results: [] });
            }
            else {
                res.forEach(b => {
                    let f =this.state.results.filter(B => B.id === b.id);
                      
                    if (f[0]) {
                        b.shelf = f[0].shelf;
                    }  
                });
                return this.setState({ results: res });
            }
        });
    }
    
      
    /*updateBook = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(resp => {
        book.shelf = shelf;
        this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat([book])
        }));
        });
      }*/

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                    this.state.results.map((book, key) => <Book updateBook={this.props.updateBook} book={book} key={key}/>)
                }
              </ol>
            </div>
          </div>
        );
    }
}

export default SearchPage;