import React from "react";
import styled from "styled-components";
import config from "../../config";

interface MovieCard {
  title: string;
}

const MovieWrapper = styled.article<{ url: string }>`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${props => props.url});
  width: 290px;
  height: 200px;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  margin: 10px;
  &:hover {
    transform: scale(1.2);
  }
`;
export function MovieCard({ title }: MovieCard): JSX.Element {
  const imageName = title.replace(/ /g, "_");
  const url = `${config.imagePath}/${imageName}`;

  return <MovieWrapper url={url} />;
}
