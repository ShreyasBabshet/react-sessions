import styles from "./Counter.module.scss";
import { CounterProps } from "./Counter.types";

const Counter = ({ count, onIncrement }: CounterProps) => {
    return (
        <div className={styles.Counter}>
            <h2>{count}</h2>
            <button onClick={onIncrement}>increment</button>
        </div>
    )
}

export default Counter;