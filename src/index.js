import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from 'styled-components'

import App from '@/App'
import "normalize.css"
import "./assets/css/index.less"
import "antd/dist/antd.less"
import store from './store'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App/>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
);
