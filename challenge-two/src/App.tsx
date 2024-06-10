import { useState } from "react";
import styles from "./App.module.scss";
import Counter from "./components/Counter/Counter";
import ColorChange from "./components/ColorChange/ColorChange";
import Server from "./components/Server/Server";

const App = () => {
  const [counts, setCounts] = useState([0, 0]);
  const [selectedColor, setSelectedColor] = useState("red");

  const handleIncrement = (index: number) => {
      const countClone = [...counts];
      countClone[index] += 1;
      setCounts(countClone);
  }

  const changeColor = () => {
    const colors = ["blue", "green", "yellow", "wheat", "gray"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    setSelectedColor(color);
  }

  return (
    <div className={styles.App}>
      {/* <Counter
        count={counts[0]}
        onIncrement={() => handleIncrement(1)}
      />
      <Counter
        count={counts[1]}
        onIncrement={() => handleIncrement(0)}
      /> */}

      {/* <section>
        <ColorChange 
          color={selectedColor}
        />
        <button onClick={changeColor}>change color</button>
      </section> */}

      <section>
        <Server 
          name="EC2"
          status="OFFLINE"
          on={() => {}}
          off={() => {}}
        />
      </section>
    </div>
  )
}

export default App;