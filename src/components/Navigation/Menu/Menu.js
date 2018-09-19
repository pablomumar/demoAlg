import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Menu.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const menu = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}>
            </DrawerToggle>
            <div className={classes.menuLogoCont}>
                <div>
                    <Link to='/'><p>Logo</p></Link>
                </div>
            </div>
            <div className={classes.DesktopOnly}>
                <ul className={classes.NavigationItems}>
                    <li className={classes.Item}><Link to='/info'>Info</Link></li>
                    <li className={classes.Item}><Link to='/demo'>Demo</Link></li>
                    <li className={classes.Item}><Link to='/contacto'>Contacto</Link></li>
                </ul>
            </div>
        </header>
    )
};

export default menu;