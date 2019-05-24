import React from 'react'


function ListItem(props) {

    
    return (
        <div className="list-item">
            <h1>title</h1>
            <div className="book-image">image</div>
            <div className="book-info">
                <div className="author-price-containter">
                    <h2>author: {props.book.author}</h2>
                    <h2>price: {props.book.price}</h2>
                </div>
                <p>one sentence blurb</p>
            </div>
        </div>
    )
}

export default ListItem