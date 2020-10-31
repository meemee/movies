import React, { ReactElement } from "react";
import { Col, Descriptions, Row } from "antd";
import { useSelector } from "react-redux";
import { selectMovieDetails } from "./selectors";
import img from "../../images/film-poster-placeholder.png";

const { Item } = Descriptions;

const MovieDetails = (): ReactElement => {
  const {
    Title,
    Plot,
    Writer,
    Director,
    Actors,
    imdbRating,
    imdbVotes,
    Metascore,
    Ratings,
    Poster,
  } = useSelector(selectMovieDetails());
  const posterUrl = Poster === "N/A" ? img : Poster;

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <img src={posterUrl} alt={Title} />
        <Descriptions title="Scores">
          <Item label="imdbRating">{imdbRating}</Item>
          <Item label="Metascore">{Metascore}</Item>
          <Item label="imdbVotes">{imdbVotes}</Item>
        </Descriptions>
        {Ratings.length &&
          Ratings.map((i) => (
            <div key={i.Value}>
              {i.Source}: {i.Value}
            </div>
          ))}
      </Col>
      <Col xs={24} sm={12} md={16} lg={18} xl={18}>
        <Descriptions title="Plot">
          <Item>{Plot}</Item>
        </Descriptions>
        <Descriptions title="About">
          <Item label="Director">{Director}</Item>
          <Item label="Writer">{Writer}</Item>
          <Item label="Actors">{Actors}</Item>
        </Descriptions>
      </Col>
    </Row>
  );
};

export default MovieDetails;
