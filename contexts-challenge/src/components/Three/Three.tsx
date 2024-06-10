import { useContext, useState } from "react";
import styles from "./Three.module.scss";
import { ThreeProps } from "./Three.types.ts"
import { AppContext } from "../../App.state.tsx";

const Three = ({ }: ThreeProps) => {

    const [, dispatch] = useContext(AppContext);
    const [text, setText] = useState("");

    return (
        <div>
            <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button
                onClick={
                    () => dispatch({ type: "SEND_TEXT", data: text })}
            >send</button>
        </div>
    )
}

export default Three 
