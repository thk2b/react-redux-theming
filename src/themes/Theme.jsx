import React from 'react'

import ThemeButton from './ThemeButton.jsx'

export default ({ themes=[], setTheme=e=>{} }) => (
    <ul>
        {themes.map(
            theme => <ThemeButton 
                onClick={ e => setTheme(theme)}
                text={theme.name}
            />
        )}
    </ul>
)