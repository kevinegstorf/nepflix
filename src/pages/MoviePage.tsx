import React from "react";
import config from "../config";
import styled from "styled-components";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "cast-media-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default function MoviePage(props: {
  match: { params: { id: number } };
}): any {
  const Video = styled.video`
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;

    .button {
      width: 200px;
      height: 200px;
      background-color: hotpink;
      display: block;
    }
  `;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <cast-media-player></cast-media-player>
      <Video
        controls
        src={`${config.moviePath}${props.match.params.id}`}
      ></Video>
      ;
    </div>
  );
}
