import React, { ReactElement } from "react";
import Meta from "antd/lib/card/Meta";
import { Col } from "antd";
import { CardStyled } from "./styled";
import { IMoviePoster } from "./types";
import img from "../../images/film-poster-placeholder.png";
import { CalendarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const MoviePoster = ({
  id,
  title,
  imgSrc,
  year,
}: IMoviePoster): ReactElement => {
  const poster = imgSrc === "N/A" ? img : imgSrc;
  const desc = (
    <div>
      <CalendarOutlined /> {year}
    </div>
  );
  const link = "/details/" + id;
  return (
    <Link to={link}>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <CardStyled id={id} cover={<img alt={title} src={poster} />}>
          <Meta title={title} description={desc} />
        </CardStyled>
      </Col>
    </Link>
  );
};

export default MoviePoster;
