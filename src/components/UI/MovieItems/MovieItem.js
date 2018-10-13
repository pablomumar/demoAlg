import React from 'react';
import SimpleStarRating from '../../../assets/js/SimpleStarRating';

import classes from './MovieItem.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar'

const movieItem = (props) => {
    let r;
    return (
        <Auxiliar>
            <div className={classes.mainItem}>
                <a href={'https://www.imdb.com/title/tt' + props.idIMDb + '/'}>
                    <img src={"https://m.media-amazon.com/images/M/" + props.poster + ",0,182,268_AL_.jpg"} alt=""/>
                    <h5>{props.title}</h5>
                    <h4>ID: {props.id}</h4>
                    <span id="myRating" className="rating" data-stars="5"> </span>
                </a>
            </div>
        </Auxiliar>
    )
};

export default movieItem;