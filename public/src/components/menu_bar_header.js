import React from 'react';


const MenuBarHeader = (props) => {
    return (
        <div className="menu_bar_header">
        
           <div className="menu_bar_header_layout">
                <div className="menu_bar_header_title">
                        <h1>{props.appTitle}</h1>
                </div>
                <div className="menu_bar_header_nav">
                    <div className="menu_bar_header_icon">

                    </div>
                    <div className="menu_bar_header_icon">

                    </div>
                    <div className="menu_bar_header_icon">

                    </div>

                </div>
           </div>
        </div>
    )
};

export default MenuBarHeader;