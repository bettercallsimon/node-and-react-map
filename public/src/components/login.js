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
                <div className="login_page_header">
                
                    <div className="login_page_title">
                        <h2>Already a member?</h2>
                    </div>

                    <div className="login_page_log_input">
                        <p>Username:</p>
                        <input type="text" id="username_login_input"/>
                        <p>Password:</p>
                        <input type="text" id="password_login_input"/>
                        <input type="button" id="login_button" value="login"/>      
                        <p><a href="#">forgot your password?</a></p>        
                    </div>

                </div>
             </div>
        );
    }
    componentDidMount() {

	}
}

export default Login;
