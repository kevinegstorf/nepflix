import React from "react";
import config from "../config";
import styled from "styled-components";

export default function MoviePage(props: {
  match: { params: { id: number } };
}): JSX.Element {
  const Video = styled.video`
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
  `;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Video
        controls
        autoPlay
        src={`${config.moviePath}${props.match.params.id}`}
      ></Video>
      ;
    </div>
  );
}
