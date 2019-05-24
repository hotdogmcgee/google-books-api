import React from 'react'
import ListItem from  '../ListItem/ListItem.js'

function List(props) {

    const list = props.books.map((book, index) => 
        <ListItem index={index} book={book}/>
    )

    return (
        <div className="List-containter">
            {list}

        </div>
    )

}

export default List