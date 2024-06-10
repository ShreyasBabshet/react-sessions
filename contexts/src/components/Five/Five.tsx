import { useContext } from "react";
import styles from "./Five.module.scss";
import { FiveProps } from "./Five.types.ts"
import { AppContext } from "../../App.context.tsx";

const Five = () => {
    // alternate hook way to use AppContext.Consumer
    const { text } = useContext(AppContext)
    return <div>leaf node - {text}</div>
}

export default Five 
