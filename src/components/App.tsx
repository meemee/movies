import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import SearchBox from './searchBox';
import Movies from '../features/movies';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreMovies, fetchMovies } from '../features/movies/slice';
import styled from 'styled-components';
import { getMovies } from '../features/movies/selectors';

const { Header, Content } = Layout;

const StyledLayout = styled(Layout)`
  overflow-y: auto;
  width: 100%;
  height: 100%;
`

function App() {
  
  const dispatch = useDispatch();
  const {data, loading, totalResults} = useSelector(getMovies());
  const hasMore = data.length < totalResults;
  const handleSearchBox = (value: string): void => dispatch(fetchMovies(value))
  const handleSearchMore = () => dispatch(fetchMoreMovies())
  const handleScroll = (e: any) => {
    const {scrollTop, clientHeight, scrollHeight} = e.currentTarget;
    console.log(scrollHeight, scrollTop, scrollHeight - scrollTop, clientHeight);
    if (scrollHeight - scrollTop < clientHeight+5 && hasMore) {
      if (loading) return;
      dispatch(fetchMoreMovies())
    }
  }
  return (
    <StyledLayout onScroll={handleScroll}>
      <Header>
        <SearchBox 
          placeholder="Search for movies by Title"
          onSearch={handleSearchBox}
        />
      </Header>
      <Content style={{padding: '20px 50px 0 50px'}}>
        <Movies loadMoreMovies={handleSearchMore}/>
      </Content>
    </StyledLayout>
  );
}

export default App;
