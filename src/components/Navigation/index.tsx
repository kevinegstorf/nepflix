import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;

  ul {
    list-style-type: none;
    display: flex;
    display: flex;
    width: 50%;
    justify-content: space-between;
  }

  li {
    margin-left: 10px;
  }
  .selected {
    font-weight: bold;
  }
`;

export function Navigation(): JSX.Element {
  return (
    <Wrapper>
      <div>
        <ul>
          <li>Logo</li>
          <li className="selected">Homepagina</li>
          <li>Series</li>
          <li>Films</li>
        </ul>
      </div>
    </Wrapper>
  );
}
