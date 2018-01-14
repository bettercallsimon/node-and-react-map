import React, { Component} from 'react';
import axios from 'axios';


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
    return (
        <div className={'pop_unit_' + this.state.toggleMenu} onClick={this.selfClick}></div>
    );
  }
}

export default Unit;