import React from "react";
import { Navigation } from "./components";

export default function Layout(prop: any): JSX.Element {
  return (
    <div>
      <Navigation />
      {prop.children}
    </div>
  );
}
