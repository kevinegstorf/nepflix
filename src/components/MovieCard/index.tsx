import React from "react";
import styled from "styled-components";
import config from "../../config";

interface MovieCard {
  title: string;
  rest: any;
}

const MovieWrapper = styled.article<{ url: string }>`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${props => props.url});
  min-width: 290px;
  height: 200px;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  margin: 10px;
  &:hover {
    transform: scale(1.2);
  }
`;
export function MovieCard({ title, rest }: MovieCard): JSX.Element {
  const imageName = title.replace(/ /g, "_");
  const url = `${config.imagePath}/${imageName}`;
  console.log(rest);

  return <MovieWrapper url={url}>{title}</MovieWrapper>;
}
