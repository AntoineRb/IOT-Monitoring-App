import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

interface INavBarProps {
}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
    return (
        <nav className='navBar'>
            <NavLink
            to='/'
            className={({isActive}) => isActive ? "activeLink": ""}
            >Modules</NavLink>
            <NavLink
            to='/add'
            className={({isActive}) => isActive ? "activeLink": ""}
            >Ajouter un Module</NavLink>
        </nav>
    );
};

export default NavBar;
