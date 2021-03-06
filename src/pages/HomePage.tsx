import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Movie } from "../types";
import { MovieCard } from "../components/";
import config from "../config";

const Wrapper = styled.section`
  padding: 4em;
`;

const Title = styled.h2`
  color: white;
`;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1
  }
};

export default function HomePage(): JSX.Element {
  const [result, setResult] = React.useState<Array<Movie>>([]);
  React.useEffect(() => {
    const google = document.createElement("google-cast-launcher");
    const Test: any = document.querySelector("#test");

    async function fetchMyAPI() {
      const response = await fetch(config.url);
      return await response.json();
    }

    fetchMyAPI().then(res => setResult(res));
  }, []);

  return (
    <Wrapper>
      <Title>Mijn Lijst</Title>
      <Carousel infinite={false} keyBoardControl responsive={responsive}>
        {result.map((movie: Movie) => {
          return (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard title={movie.title} rest={movie} />
            </Link>
          );
        })}
      </Carousel>
    </Wrapper>
  );
}
