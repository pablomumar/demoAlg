import React from 'react';
import {Link} from 'react-router-dom';

import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Auxiliar>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <br/>
                <ul className={classes.NavigationItems}>
                    <li className={classes.Item}><Link to='/info'>Info</Link></li>
                    <li className={classes.Item}><Link to='/demo'>Demo</Link></li>
                    <li className={classes.Item}><Link to='/contacto'>Contacto</Link></li>
                </ul>
            </div>
        </Auxiliar>
    );
};

export default sideDrawer;