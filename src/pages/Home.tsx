import React, { ReactElement } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../components/searchBox";
import { fetchMoreMovies, fetchMovies } from "../features/movies/slice";
import { selectMovies } from "../features/movies/selectors";
import Movies from "../features/movies";
import { StyledContent, StyledLayout } from "./styles";

const { Header } = Layout;

const Home = (): ReactElement => {
  const dispatch = useDispatch(),
    { data, loading, totalResults } = useSelector(selectMovies()),
    hasMore = data.length < totalResults,
    handleSearchBox = (value: string): void => dispatch(fetchMovies(value)),
    handleScroll = (e: any) => {
      const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

      if (scrollHeight - scrollTop < clientHeight + 5 && hasMore) {
        if (loading) return;
        dispatch(fetchMoreMovies());
      }
    };

  return (
    <StyledLayout onScroll={handleScroll}>
      <Header>
        <SearchBox
          placeholder="Search for movies by Title"
          onSearch={handleSearchBox}
        />
      </Header>
      <StyledContent>
        <Movies />
      </StyledContent>
    </StyledLayout>
  );
};

export default Home;
