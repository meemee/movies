import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { selectMovies } from './selectors';
import { Row } from 'antd';
import MoviePoster from '../../components/MoviePoster';

const Movies = (): ReactElement => {

    const {data} = useSelector(selectMovies());
    
    return (
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {data.length > 0 && data.map((i: any) => (
                <MoviePoster 
                    key={i.imdbID} 
                    id={i.imdbID} 
                    title={i.Title} 
                    imgSrc={i.Poster}
                    year={i.Year}
                    />
            ))
            }
        </Row>
    )
}


export default Movies;