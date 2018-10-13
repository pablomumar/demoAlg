import React from 'react';

import MovieItem from '../../../components/UI/MovieItems/MovieItem'

const recommended = (props) => {
    return (
        (props.arrayFilms.length === 0 || props.arrayFilms === '') ?
            props.arrayFilms.slice(12, 16).map(movie => (
                <MovieItem
                    key={movie.id}
                    poster={movie.poster}
                    title={movie.titleES}
                    id={movie.id}
                    idIMDb={movie.imdbId}
                />
            ))
            :
            <p> No has hecho ninguna valoracion aun</p>
    )
};

export default recommended;