import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Demo from '../../containers/Demo/Demo';
import Info from '../../containers/Info/Info';
import Contacto from '../../containers/Contacto/Contacto';
import Menu from '../../components/Navigation/Menu/Menu';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Main extends Component{
    state = {
        sideDrawer: false
    };

    sideDrawerCloseHandler = () => {
        this.setState({sideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {sideDrawer: !prevState.sideDrawer}
        })
    };

    render(){
        let push = {height: 54 + 'px'};
        return(
            <Auxiliar>
                <Route path="/" exact render={() => (
                    <Auxiliar>
                        <Menu drawerToggleClicked={this.sideDrawerToggleHandler}/>
                        <SideDrawer open={this.state.sideDrawer} closed={this.sideDrawerCloseHandler}/>
                        <div style={push}>
                        </div>
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