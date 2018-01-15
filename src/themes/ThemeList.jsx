import React from 'react'
import { connect } from 'react-redux'

import ThemeButton from './ThemeButton.jsx'
import { setTheme } from './actions'
import css from './ThemeList.css'

const mapStateToProps = ({ themes }) => ({ themes })

const mapDispatchToProps = ( dispatch ) => ({
    setTheme: theme => dispatch(setTheme(theme))
})

const Themes = ({ themes, setTheme }) => {
    return (
    <ul>
        {themes.list.map(
            (theme, id) => <li
                key={theme.name}
            >
                <ThemeButton
                    onClick={ e => setTheme(id)}
                    name={theme.name}
                />
            </li>
        )}
    </ul>
)}

export default connect(mapStateToProps, mapDispatchToProps)(Themes)