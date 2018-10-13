import React from 'react';

import MovieItem from '../../../components/UI/MovieItems/MovieItem'

const demoContent = (props) => {
    return (
        props.arrayFilms.slice(0, 12).map(movie => (
            <MovieItem
                key={movie.id}
                poster={movie.poster}
                title={movie.titleES}
                id={movie.id}
                idIMDb={movie.imdbId}
            />
        ))
    )
};

export default demoContent;