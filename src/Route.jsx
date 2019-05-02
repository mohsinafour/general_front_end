import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Data from './components/Components/Data'
import Home from './components/Components/Home'
const routing = (
 <Router>
   <div>
     <Route path="/data" component={Data} />
     <Route path="/home" component={Home} />
   </div>
 </Router>
)
ReactDOM.render(routing, document.getElementById('root'))