import React, { Component } from 'react';
import './App.css';
import MenuBarTitle from './components/menu_bar_title';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {status : 'idle', appTitle: 'none'};



	}
	
	render() {
		return (
			<div className="App">
			{/* * THE ACTUAL CLIENT CODE */}

				<div class="appWrapper">

					{/* === APP STRUCTURE === */}
					
					{/* menu_bar_title */}
						{/* pop_notification */}
						{/* pop_account */}
						{/* pop_logout */}

					{/* IF (LOGGED) map ELSE login */}
						{/* pop_filter */}
							{/* child of map: pop_building */}
							{/* child of map: pop_employee */}

					{/* menu_bar_footer */}
						{/* menu_newsfeed */}
						{/* pop_contactbook */}
						{/* pop_addressbook */}
						{/* pop_intelbook */}
			
					{/* temporary code just to see if it works */}
					<MenuBarTitle appTitle={this.state.appTitle} />

				</div>
			
			{/* end of App's main div */}
			</div>
		);
	}
}

export default App;
