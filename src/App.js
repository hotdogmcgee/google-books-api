import React from 'react';
import List from './List/List.js'

class App extends React.Component {

  booksArr = [
    {
      author: "heyo",
      price: 50
    },
    {
      author: "yoyoyoy",
      price: 700
    }
  ]

  render () {

      return (
        <main className='App'>
          <List books={this.booksArr}/>
        </main>
      );
    }
}

export default App;