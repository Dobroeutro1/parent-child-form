import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import reducer from './js/reducers'
import { actionFn } from './js/utils'
import { Sidebar } from './js/components/sidebar'
import { Sections } from './js/components/sections'
import { Provider } from 'react-redux'

const store = applyMiddleware(actionFn)(createStore)(reducer)

if (document.getElementById('root')) {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store} >
        <Sidebar />
        <Sections store={store} />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
}
