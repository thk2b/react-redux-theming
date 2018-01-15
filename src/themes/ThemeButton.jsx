import React from 'react'

export default ({ onClick = e=>{}, text}) => (
    <button
        onClick={onClick}
        >{ text }
    </button> 
)