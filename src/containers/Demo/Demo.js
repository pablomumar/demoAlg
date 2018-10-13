import React, { Component } from 'react';

import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Menu from '../../components/Navigation/Menu/Menu';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import DemoContent from './DemoContent/DemoContent';
import Recommended from './Recommended/Recommended';
import classes from './Demo.css';
import moviesJSON from '../../assets/json/movies.json';

class Demo extends Component{
    state = {
        inputValue: '',
        push: {
            height: 54 + 'px'
        },
        sideDrawer: false,
        moviesJSON, //Full json load, making AJAX when double binding is done
        arrayRecom:{

        }
    };

    // componentDidMount(){
    //     console.log(this.state.moviesJSON) //Solo para comprobar keys del .json
    // }

    sideDrawerCloseHandler = () => {
        this.setState({sideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {sideDrawer: !prevState.sideDrawer}
        })
    };

    nameChangedHandler = (event) => {
        const oldValue = {...this.state.inputValue};
        const newValue = {inputValue: event.target.value};
        if (oldValue.inputValue !== newValue.inputValue){
            this.setState(newValue);
        }
    };

    render(){
        let push = {height: 54 + 'px'};
        return(
            <Auxiliar>
                <Menu drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.sideDrawer} closed={this.sideDrawerCloseHandler}/>
                <div style={push}> </div>
                <div className={classes.contentDemo}>
                    <h1>Demo</h1>
                    <input
                        type="text"
                        placeholder={'Introduce el titulo'}
                        className={classes.inputDemo}
                        onChange={(event) => this.nameChangedHandler(event)}
                        value={this.state.inputValue}
                    />
                    <div>
                        <div className={classes.w70}>
                            <h4>Todas las peliculas</h4>
                        </div>
                        <div className={classes.w30}>
                            <h4>Peliculas recomedadas</h4>
                        </div>
                    </div>
                    <div className={classes.contentFilms}>

                        <div className={classes.allFilms}>
                            <DemoContent arrayFilms={this.state.moviesJSON}/> {/*Todas las pelis*/}
                        </div>

                        <div className={classes.recomFilms}>
                            <Recommended arrayFilms={this.state.arrayRecom}/>
                            {/*SetState arrayRecom after ajax get*/}
                        </div>
                    </div>
                </div>
            </Auxiliar>
        )
    }
}

export default Demo;