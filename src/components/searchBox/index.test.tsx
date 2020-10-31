import React from "react";
import { render } from "@testing-library/react";
import SearchBox from ".";
import { BrowserRouter } from "react-router-dom";

describe("SearchBox", () => {
  it("renders", async () => {
    const { container } = render(
      <BrowserRouter>
        <SearchBox placeholder="test" onSearch={jest.fn()} />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
