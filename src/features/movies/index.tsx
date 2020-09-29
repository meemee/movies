import React, { ReactElement, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getMovies } from './selectors';
import { Row } from 'antd';
import MoviePoster from '../../components/MoviePoster';
import { IMovies } from './types';

const Movies = ({loadMoreMovies}: IMovies): ReactElement => {

    const {data, loading, totalResults} = useSelector(getMovies());
    const movieRef = useRef();
    // console.log(data.length);
    const hasMore = data.length < totalResults;
    console.log('out', hasMore);

    // const lastMovie = useCallback(node => {
    //     if (loading) return;
    //     let ref = movieRef.current as any;
    //     if (ref) ref.disconnect();
    //     ref = new IntersectionObserver(items => {
    //         if (items[0].isIntersecting && hasMore){
    //             console.log('in', hasMore)
    //             loadMoreMovies()
    //             console.log('i am last')
    //         }
    //     })
    //     if (node) ref.observe(node);
    // }, [loading, hasMore, data]);

    return (
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {data.length && data.map((i: any, index: number) => (
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