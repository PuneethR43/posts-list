import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './styles.css'

import PostForm from './components/PostForm'
import PostList from './components/PostsList'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <ul>
            <li>
              <Link to = "/"> Published </Link>
            </li>
            <li>
              <Link to = "/post/new"> New Post </Link>
            </li>
          </ul>
          <Route path = "/" component = {PostList} exact = {true}/>
          <Route path = "/post/new" component = {PostForm} />
        </div>
      </BrowserRouter>
  )
}

export default App