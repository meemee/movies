import React from "react";
import { render } from "@testing-library/react";
import MoviePoster from ".";
import { BrowserRouter } from "react-router-dom";

describe("Movie Poster", () => {
  it("renders", async () => {
    const { container } = render(
      <BrowserRouter>
        <MoviePoster
          id="123"
          title="Batman"
          imgSrc="http://www.img.com"
          year="1999"
        />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
  it("renders poster with placeholder", async () => {
    const { container } = render(
      <BrowserRouter>
        <MoviePoster id="123" title="Batman" imgSrc="N/A" year="1999" />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
