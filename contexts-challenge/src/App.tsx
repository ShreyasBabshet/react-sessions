import "./App.scss";
import { AppProvider } from "./App.state";
import One from "./components/One/One";
import Two from "./components/Two/Two";


const App = () => {
  return (
    <AppProvider>
      <div className="AppContainer">
        <One />
        <Two />
      </div>
    </AppProvider>
  )
}

export default App;