import React, { Component } from 'react';
import './App.css';

/**
 * import components
 */
import MenuBarTitle from './components/menu_bar_title';
import Map from './components/map';
import MyClass from './components/maptest';
import MenuBarFooter from './components/menu_bar_footer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {status : 'idle', appTitle: 'Criminal'};

	}
	
	render() {
		return (
			<div className="App">
			{/* * THE ACTUAL CLIENT CODE */}

				<div class="appWrapper">

					{/* === APP STRUCTURE === */}
					
					{/* menu_bar_title */}
					<MenuBarTitle appTitle={this.state.appTitle} />
						{/* pop_notification */}
						{/* pop_account */}
						{/* pop_logout */}

					{/* IF (LOGGED) map ELSE login */}
					<Map />
					<MyClass />
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
}

export default App;
