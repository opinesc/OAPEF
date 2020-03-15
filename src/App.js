import React, { useContext} from 'react'

import {Context } from './Context'

export const App =() => {
    const { isAuth } = useContext(Context)

    return (
        <h4>Hola OAPE!!!</h4>
    )
}