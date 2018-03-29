import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

/**
 * import components
 */
import MenuBarHeader from './components/menu_bar_header';
import Map from './components/map';

import Login from './components/login';
import MenuBarFooter from './components/menu_bar_footer';

class App extends Component {
	constructor(props) {
		super(props);

		//logged: false triggers the loggin interface
		//use logged: true to show the map that automatically fetch the data
		this.state = {logged : true, appTitle: 'Demo pour Cienapps'};

	}
	
	render() {
		
		if(this.state.logged === true) {
			return (
				<div className="App">
				{/* * THE ACTUAL CLIENT CODE */}
	
					
						<div className="layout">
							{/* === APP STRUCTURE === */}
						
							{/* menu_bar_header */}
							<MenuBarHeader appTitle={this.state.appTitle} />
								{/* pop_notification */}
								{/* pop_account */}
								{/* pop_logout */}
		
							{/* IF (LOGGED) map ELSE login */}
							
							<Map />
								
		
								{/* pop_filter */}
									{/* child of map: pop_building */}
									{/* child of map: pop_employee */}
		
							{/* menu_bar_footer */}
							<MenuBarFooter />
								{/* menu_newsfeed */}
								{/* pop_contactbook */}
								{/* pop_addressbook */}
								{/* pop_intelbook */}
							</div>

					
				
				{/* end of App's main div */}
				</div>
			);
		}
		else if (this.state.logged === false) {
			return (
				<div className="App">
				{/* * THE ACTUAL CLIENT CODE */}
	
					{/* === APP STRUCTURE === */}
				
					{/* menu_bar_title */}
					<MenuBarHeader appTitle={this.state.appTitle} />
						{/* pop_notification */}
						{/* pop_account */}
						{/* pop_logout */}

						<div className="map">
							<Login />
						</div>
						
					

						{/* pop_filter */}
							{/* child of map: pop_building */}
							{/* child of map: pop_employee */}

					{/* menu_bar_footer */}
					<MenuBarFooter />
						{/* menu_newsfeed */}
						{/* pop_contactbook */}
						{/* pop_addressbook */}
						{/* pop_intelbook */}
						
				{/* end of App's main div */}
				</div>
			);
		}
		
		
		
		
		
	}

}

export default App;
