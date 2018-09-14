import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Demo from '../../containers/Demo/Demo';
import Info from '../../containers/Info/Info';
import Contacto from '../../containers/Contacto/Contacto';
import Menu from '../../components/Menu/Menu';

class Main extends Component{
    render(){
        return(
            <Auxiliar>
                <Route path="/" exact render={() => (
                    <Auxiliar>
                        <Menu/>
                        <h1>Main</h1>
                    </Auxiliar>
                )}/>
                <Route path="/info" exact component={Info}/>
                <Route path='/demo' exact component={Demo}/>
                <Route path='/contacto' exact component={Contacto}/>
            </Auxiliar>
        )
    }
}

export default Main;