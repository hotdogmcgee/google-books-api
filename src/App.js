import React from 'react';
import List from './List/List.js'
import SearchBar from './SearchBar/SearchBar.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      booksArr: [],
      isEbook: null
    }
  }

  
  updateSearch(searchValue) {

    const url = 'https://www.googleapis.com/books/v1/volumes';
    const searchURL = url + "?q=" + searchValue;
    console.log(searchURL)
    const options = {
      method: 'GET',
      headers: {
        "key": "AIzaSyBikfCRGoMehHrEVwSO7u1Cw9S4esnpUaM",
      }
    };

    fetch(searchURL, options)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, oh no!')
        }
          return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          booksArr: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
    }

  updateBooksArr(books) {
      if (this.state.isEbook === true) {
        return books.filter((item) => 
         item.saleInfo.isEbook === true)
      } else if (this.state.isEbook === false) {
        return books.filter((item) => 
         item.saleInfo.isEbook === false)
      } else {
        return books
      }
  }
  

  updateListType(type) {
    // const newList = this.state.booksArr.items.filter((item) => 
    //   item.saleInfo.isEbook === type
    // )

    // const displayList = this.state.booksArr.isEbook === (null || false) ?
    // this.state.booksArr.items
    // : this.state.booksArr.items.filter((item) => 
    //    item.saleInfo.isEbook === true)

    // this.state.booksArr.items.filter((item) => 
    //    item.saleInfo.isEbook === true)

    this.setState({
      isEbook: type
    })
  }

  render () {

    const displayList = this.state.booksArr.items ?
    <List books={this.updateBooksArr(this.state.booksArr.items)}/>
    : ""

      return (
        <main className='App'>
          <header>
            <h1>Google Book Search</h1>
          </header>
          <SearchBar 
            updateSearch={search => this.updateSearch(search)}
            updateListType={type => this.updateListType(type)}
          />
          {displayList}
        </main>
      );
    }
}

export default App;