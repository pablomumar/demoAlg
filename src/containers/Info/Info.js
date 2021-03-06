import React, { Component } from 'react';

import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Menu from '../../components/Navigation/Menu/Menu';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Info extends Component{
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
                <Menu drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.sideDrawer} closed={this.sideDrawerCloseHandler}/>
                <div style={push}>
                </div>
                <h1>Info</h1>
            </Auxiliar>
        )
    }
}

export default Info;