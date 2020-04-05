import React from 'react'

const searchfield = (props)=>{
    return (
        <div>
            <p>find countries</p>
            <input
            onChange={props.showFiltered}
            />
        </div>
    )
}

export default searchfield