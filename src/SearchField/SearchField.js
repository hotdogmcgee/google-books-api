import React from 'react'
import $ from 'jquery'

class SearchField extends React.Component {
    constructor(props) {
        super(props)
    }
   

    //include an onSubmit function
    render() {
        return (
        <form 
            onSubmit={e => {
                e.preventDefault()
                console.log(e)
                this.props.updateSearch($('#whatever').val())}}
            className="search-form">
            <label htmlFor="search">enter search</label>
            <input type="text" name="search" placeholder="try a book or author" id="whatever"></input>
            <button type="submit">Search!</button>
        </form>
        )
    }
}

export default SearchField