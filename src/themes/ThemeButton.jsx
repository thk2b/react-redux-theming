import React from 'react'
import css from './ThemeButton.css'

export default ({ onClick = e=>{}, name}) => (
    <button
        className={css.ThemeButton}
        onClick={onClick}
        >{ name }
    </button> 
)