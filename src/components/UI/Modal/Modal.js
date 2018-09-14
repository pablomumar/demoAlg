import React ,{ Component } from 'react';

import classes from './Modal.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show
    }

    render(){
        return (
            <Auxiliar>
                <Backdrop show={true} clicked={this.props.closeModal}/>
                <div className={classes.Modal}>
                    {this.props.children}
                </div>
            </Auxiliar>
        )
    }
}

export default Modal;