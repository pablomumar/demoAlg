import React from 'react';
import {Link} from 'react-router-dom';

import Auxiliar from './../../hoc/Auxiliar/Auxiliar';
import classes from './SeccionInfo.css';

const seccionInfo = (props) => {
    return(
        (props.imgIzq) ? (
            <Auxiliar>
                <div> </div>
            </Auxiliar>

        ):(
            <Auxiliar>
                <div> </div>
            </Auxiliar>
        )
    )

};

export default seccionInfo;