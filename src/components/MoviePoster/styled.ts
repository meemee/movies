import { Card } from "antd";
import styled from "styled-components";

export const CardStyled = styled(Card)`
  width: 200px;
  margin: 0 auto;

  .ant-card-cover {
    height: 300px;
    overflow: hidden;
  }

  img {
    min-height: 100%;
  }
`;
