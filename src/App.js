import React, { useContext } from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import { Context } from './Context'
import { Header } from './components/Header'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  )
}
