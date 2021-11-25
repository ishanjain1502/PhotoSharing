import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
	return (
		<div className="container">
			<nav className="navigation">
				<ul>
					<li><a href="http://localhost:3000/">Home</a></li>
					<li><a href="http://localhost:3000/register">Register</a></li>
					<li><a href="http://localhost:3000/login">Login</a></li>
					{/* <li><a href="#about">About</a></li> */}
				</ul>
			</nav>
			<BrowserRouter>
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/dashboard" exact component={Dashboard} />
			</BrowserRouter>
		</div>
	)
}

export default App
