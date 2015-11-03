/// <reference path="../typings/tsd.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import Foo from "./components/foo";

class App extends React.Component<any, any> {

  constructor() {
    super();
  }

  render() {

    return (
      <Foo className="foobar!" />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("MyComponent"));
