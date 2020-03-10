import React from "react";
import styled from "styled-components";
import { MovieCard } from "../components";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function HomePage(): JSX.Element {
  React.useEffect(() => {}, []);
  return (
    <Wrapper>
      <MovieCard />
    </Wrapper>
  );
}
