import React, { Component } from 'react';

import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Menu from '../../components/Menu/Menu';

class Info extends Component{
    render(){
        return(
            <Auxiliar>
                <Menu/>
                <h1>Info</h1>
            </Auxiliar>
        )
    }
}

export default Info;