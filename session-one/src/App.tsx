import { Component, ReactNode } from "react";
import Friend from "./components/friend/Friend";
import Box from "./components/Box/Box";

// functional component
const App = () => {
  return (
    <div>
      <h1>hello world</h1>
      <div className="friend">
        <p>this is not the friend component</p>
      </div>
      <Friend />
      <Box />
      <Box />
      <Box />
    </div>
  )
}


// class based component
export class AppComponent extends Component {

  render(): ReactNode {
    return (
      <h1>Hello, World!</h1>
    )
  }
}

export default App;