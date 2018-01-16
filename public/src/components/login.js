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
            <div className="login_page_layout">
                hello world
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatem beatae amet earum magni, quasi alias, illum officia non, quisquam nulla tempore temporibus. Ea officiis, commodi animi deserunt provident consectetur.
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque quo dignissimos iure! Consequatur minima veritatis porro, in amet, ut ducimus, dolor impedit voluptatem magni ipsam expedita fugiat numquam? Iste.
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatem beatae amet earum magni, quasi alias, illum officia non, quisquam nulla tempore temporibus. Ea officiis, commodi animi deserunt provident consectetur.
                <br />
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatem beatae amet earum magni, quasi alias, illum officia non, quisquam nulla tempore temporibus. Ea officiis, commodi animi deserunt provident consectetur.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, beatae, ad dolorem illum laborum a voluptatem officiis veniam alias explicabo consequuntur dolor, incidunt amet laudantium? Sunt tenetur soluta ab libero?
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatem beatae amet earum magni, quasi alias, illum officia non, quisquam nulla tempore temporibus. Ea officiis, commodi animi deserunt provident consectetur.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit quasi fugit inventore asperiores quos, nobis vitae? Nobis, accusantium eveniet. Ex maxime illo, incidunt totam quae inventore. Blanditiis, aliquam earum?
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatem beatae amet earum magni, quasi alias, illum officia non, quisquam nulla tempore temporibus. Ea officiis, commodi animi deserunt provident consectetur.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati voluptate eligendi veritatis laboriosam ex, officia, fuga dicta recusandae porro velit rerum modi et? Tenetur, culpa ut. Ullam possimus nemo earum?
            </div>
        );
    }
    componentDidMount() {
        // once the component is fully loaded, we call the API for the map data
        
        // axios.get('/api/')
		// .then( (response) => {
            
        //     // we change the app state, with the new data, which makes a re-render
        //     this.setState({});

		// })
		// .catch(function (error) {
		//     console.log(error);
		// });
	}
}

export default Login;
