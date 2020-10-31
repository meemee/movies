import React from "react";
import { render } from "@testing-library/react";
import MovieDetails from ".";
import { Provider } from "react-redux";
import store from "../../store";

describe("MovieDetails", () => {
  it("renders", async () => {
    const { container } = render(
      <Provider store={store}>
        <MovieDetails />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
