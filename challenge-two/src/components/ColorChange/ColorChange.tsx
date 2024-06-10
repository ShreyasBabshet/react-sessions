import styles from "./ColorChange.module.scss";
import { ColorChangerProps } from "./ColorChanger.types";

const ColorChange = ({ color }: ColorChangerProps) => {
    return (
        <div 
            className={styles.ColorChange}
            style={{ background: color }}
        ></div>
    );
}

export default ColorChange;