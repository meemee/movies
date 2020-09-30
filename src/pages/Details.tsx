import React, { ReactElement, useEffect } from 'react';
import { Layout, Spin, Tag } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import { StyledContent, StyledLayout, StyledPageHeader } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../features/movieDetails/slice';
import { selectMovieDetails, selectMovieLoading } from '../features/movieDetails/selectors';
import MovieDetails from '../features/movieDetails';


const { Header } = Layout;

const Details = (): ReactElement => {
    const dispatch = useDispatch();
    const movieLoading = useSelector(selectMovieLoading());
    const { 
        Title,
        Year,
        Type
     } = useSelector(selectMovieDetails());

    const history = useHistory();   
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchMovieDetails(id))
    }, []);

    return (
        <StyledLayout>
            {movieLoading ? <Spin/> : (
            <>
                <Header>
                    <StyledPageHeader
                        onBack={() => history.push("/")}
                        title={Title}
                        subTitle={Year}
                        tags={<Tag color="blue">{Type}</Tag>}
                    />
                </Header>
                <StyledContent>
                    <MovieDetails />
                </StyledContent>
            </>
            )}
        </StyledLayout>
    )
}

export default Details