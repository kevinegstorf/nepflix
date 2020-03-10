import React from "react";
import MovieCard from "./index";
import { render } from "@testing-library/react";

describe("MovieCard", () => {
  it("renders a MovieCard", () => {
    const { getByText } = render(<MovieCard />);
    const linkElement = getByText(/Movie Title/i);
    expect(linkElement).toBeInTheDocument();
  });
});
