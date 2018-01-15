import React from 'react'
import css from './Button.css'

export default ({ onClick = e=>{}, name}) => (
    <button
        className={css.Button}
        onClick={onClick}
        >{ name }
    </button> 
)