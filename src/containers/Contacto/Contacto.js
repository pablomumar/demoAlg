import React, { Component } from 'react';

import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Menu from '../../components/Menu/Menu';

class Contacto extends Component{
    render(){
        return(
            <Auxiliar>
                <Menu/>
                <h1>Contacto</h1>
            </Auxiliar>
        )
    }
}

export default Contacto;