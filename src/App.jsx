import React, { Component } from 'react';
import './App.scss';
import Home from './containers/home/container'
import Header from './containers/header/container'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<main className="main-content">
					<Home/>
				</main>
			</div>
		);
	}
}


export default App;