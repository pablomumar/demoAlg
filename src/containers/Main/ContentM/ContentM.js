import React from 'react';
import {Link} from 'react-router-dom';

import Auxiliar from './../../../hoc/Auxiliar/Auxiliar';
import classes from './ContentM.css';

const contentM = () => {
    return(
        <Auxiliar>
            <div className={classes.topPage}>
                <div>
                    <div className={classes.topPageContent1}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis consequatur corporis delectus dolor dolores eum excepturi fugit id, libero natus nulla perspiciatis quod repudiandae rerum saepe, sapiente sit unde.</p>
                    </div>
                    <div className={classes.topPageContent2}>
                        <Link to='/demo'>Demo</Link>
                    </div>
                    <div className={classes.topPageContent3}>
                        <Link to='/contacto'>Contacto</Link>
                    </div>
                </div>
            </div>

        </Auxiliar>
    )
};

export default contentM;