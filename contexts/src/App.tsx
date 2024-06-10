import { useContext, useState } from "react";
import One from "./components/One/One";
import { AppContext, AppProvider } from "./App.context";


const App = () => {
  // const [text, setText] = useState("hi");
  // const text = "abcd"
  const { text, setText } = useContext(AppContext);

  // // NOT RECOMMENDED
  // setInterval(() => {
  //   setText(text + "hi")
  // }, 2000)

  return (
    <>
      <One />
      <button onClick={() => {
        console.log(setText)
        setText(text + "hi")
      }}>change value of provider</button>
    </>

  );
}

export default App;