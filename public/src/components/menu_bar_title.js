import React from 'react';

const MenuBarTitle = (props) => {
    return (
        <div className="menu_bar_title">
            <h1>{props.appTitle}</h1>
        </div>
    )
};

export default MenuBarTitle;