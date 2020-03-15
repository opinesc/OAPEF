import React from 'react'
import ReactDom from 'react-dom'

import Context from './Context'
import {App} from './App'

ReactDom.render(
    <Context.Provider>
        <App />
    </Context.Provider>, 
    document.getElementById('app'))
