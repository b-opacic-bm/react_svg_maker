import React from 'react';
import { NavLink } from 'react-router-dom';

const navitem = (props) => {
    return (
        <NavLink to={"/" + props.name}>{props.name}</NavLink>
    )
}


export default navitem;