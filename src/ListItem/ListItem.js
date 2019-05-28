import React from 'react'


function ListItem(props) {

    const author = props.book.volumeInfo.authors ? 
        props.book.volumeInfo.authors[0]
        : "no author found";


    const price = props.book.saleInfo.retailPrice ?
        '$' + props.book.saleInfo.retailPrice["amount"]
        : "no price found"

    const thumbnail = props.book.volumeInfo.imageLinks ?
        props.book.volumeInfo.imageLinks.smallThumbnail
        : ""

    return (
        <div className="list-item">
            <h1>{props.book.volumeInfo.title}</h1>
            <div className="book-image"><img alt="book cover"src={thumbnail}></img></div>
            <div className="book-info">
                <div className="author-price-container">
                    <h2>author: {author}</h2>
                    <h2>price: {price}</h2>
                </div>
                <p>{props.book.volumeInfo.description}</p>
            </div>
        </div>
    )
}

export default ListItem