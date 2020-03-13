import React, { ReactNode } from "react";
import { Navigation } from "./components";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
}
