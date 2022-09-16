import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"

import App from '@/App'
import "normalize.css"
import "./assets/css/index.less"
import store from './store'

// @ => src: webpack
// 问题: react脚手架隐藏webpack
// 解决一: npm run eject
// 解决二: craco => create-react-app config

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <HashRouter>
          <App/>
        </HashRouter>
      </Provider>
    </Suspense>
  // </React.StrictMode>
);
