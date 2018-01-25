import React, { Component} from 'react';

//import components

import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);

        // set original states for the component
        this.state = {};

    }


    render() {
        
        return (
            <div className="layout">
               
                {/* header section */}
                <div className="login_page_header">
                
                    <div className="login_page_title">
                        <h2>Already a member?</h2>
                    </div>

                    <div className="login_page_log_input">
                        
                        <input type="text" className="input_header_txt" id="username_login_input" placeholder="username"/>
                        
                        <input type="text" className="input_header_txt" id="password_login_input" placeholder="password"/>
                        <input type="button" id="login_button" className="btn_light" value="login"/>      
                        <p><a href="#">forgot your password?</a></p>        
                    </div>
                </div>
                
                {/* Sell the concept + subscribe dual section */}
                <div className="login_page_content">
                    <div className="login_page_gameconcept">
                        insert facebook style picture that explain the game
                    </div>
                    <div className="login_page_subscribeform">
                        
                        <h2>inscription</h2>
                        <p>username:</p>
                        <input type="text"/>
                        <p>password</p>
                        <input type="text"/>
                        <input type="button" className="btn_light" id="" value="register"/>
                    </div>
                </div>


             </div>
        );
    }
    componentDidMount() {

	}
}

export default Login;
