import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'green'
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>todo</NavLink></li>
                <li><NavLink to="/github" activeStyle={activeStyle}>github</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;