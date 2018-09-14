import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Menu.css';

const menu = () => {
    return (
        <header className={classes.menuContainer}>
            <div className={classes.menuLogoCont}>
                <div>
                    <Link to='/'><p>Logo</p></Link>
                </div>
            </div>
            <div className={classes.menuElemCont}>
                <ul>
                    <li><Link to='/info'>Info</Link></li>
                    <li><Link to='/demo'>Demo</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                </ul>
            </div>
        </header>
    )
};

export default menu;