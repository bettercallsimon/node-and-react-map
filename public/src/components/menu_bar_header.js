import React from 'react';

const MenuBarHeader = (props) => {
    return (
        <div className="menu_bar_header">
            <h1>{props.appTitle}</h1>
        </div>
    )
};

export default MenuBarHeader;