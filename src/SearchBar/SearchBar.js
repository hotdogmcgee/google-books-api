import React from 'react'
import SearchField from '../SearchField/SearchField.js'
import PrintType from '../PrintType/PrintType.js'
import BookType from '../BookType/BookType.js'

function SearchBar(props) {
    return (
        <section id="search-bar">
            <SearchField updateSearch={props.updateSearch} />
            <div className="type-filters">
                <PrintType updateListType={props.updateListType}/>
                {/* <BookType /> */}
            </div>
        </section>
        

    )
}

export default SearchBar