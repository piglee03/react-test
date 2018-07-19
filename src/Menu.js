import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'white'
    };
    const style = {
        backgroundColor:'gray',
        width: '50%',
        float: 'left',
        marginTop: '1rem',
        marginBottom: '1rem',
        paddingTop:'0.5rem',
        paddingBottom:'0.5rem',
        borderRadius: '10px'
    }
    return (
        <div>{/*
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>todo</NavLink></li>
                <li><NavLink to="/github" activeStyle={activeStyle}>github</NavLink></li>
            </ul>
             */}
             <div style={style}><NavLink exact to="/" activeStyle={activeStyle}>todo</NavLink></div>
             <div style={style}><NavLink to="/github" activeStyle={activeStyle}>github</NavLink></div>
            <hr/>
        </div>
    );
};

export default Menu;