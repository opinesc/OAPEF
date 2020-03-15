import React, { useContext, Fragment } from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import {Context } from './Context'

export const App =() => {
    const { isAuth } = useContext(Context)

    return (
      <Fragment>
        <GlobalStyle />
        <h4>Hola OAPE!!!</h4>
      </Fragment>
    )
}