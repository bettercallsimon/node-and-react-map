import React, { Component} from 'react';

class Unit extends Component {
  constructor(props){
    super(props);

    this.state = {toggleMenu: 'closed'}
  }
  
  //  toggle the 'menu' when clicked (it change CSS class) not sure if I probably just switch component
  selfClick = () => {

    if(this.state.toggleMenu === 'closed'){
      this.setState({toggleMenu : 'opened'});
      console.log('opened')
    } else {
      this.setState({toggleMenu : 'closed'});
      console.log('closed')
    }
  }

  render() {
	
	//	conditionnal rendering
    if(this.state.toggleMenu === 'closed'){
		return (
			<div className={'pop_unit_closed'} onClick={this.selfClick}></div>
		);
	} 
	else if (this.state.toggleMenu === 'opened'){
		return (
			<div className={'pop_unit_opened'} onClick={this.selfClick}>
        <p>{this.props.name}</p>
        <p>Cette application React affiche toutes les compagnies d'ébénisterie trouvées via Google Places dans un rayon de 50km autour des bureaux de Cienapps</p>
      </div>
		);
	}
    
    
  }
}

export default Unit;