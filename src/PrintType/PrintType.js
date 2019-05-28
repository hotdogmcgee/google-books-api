import React from 'react'

//display only saleInfo.isEbook?

function PrintType(props) {
    return (
        <form>
            <label htmlFor="print-type">Print Type:</label>
            <select
                name="print-type"
                onChange={e => props.updateListType(e.target.value)}
            >
                <option value="false">book</option>
                <option value="true">e-book</option>
            </select>
        </form>
    )
}

export default PrintType