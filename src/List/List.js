import React from 'react'
import ListItem from  '../ListItem/ListItem.js'
import './List.css'

function List(props) {

    const list = props.books.map((book, index) => 
        <ListItem key={index} book={book}/>
    )

    return (
        <div className="list-container">
            {list}

        </div>
    )

}

List.defaultProps = {
    books: []
}

export default List