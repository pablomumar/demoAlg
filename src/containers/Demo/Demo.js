import React, { Component } from 'react';

import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Menu from '../../components/Menu/Menu';

class Demo extends Component{
    render(){
        return(
            <Auxiliar>
                <Menu/>
                <h1>Demo</h1>
            </Auxiliar>
        )
    }
}

export default Demo;