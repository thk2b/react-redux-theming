import React from 'react'
import css from './Button.css'

export default ({ onClick = e=>{}, text}) => (
    <button
        className={css.Button}
        onClick={onClick}
        >{ text }
    </button> 
)