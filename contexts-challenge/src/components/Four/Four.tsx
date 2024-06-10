import { useContext } from "react";
import { AppContext } from "../../App.state.tsx";
import styles from "./Four.module.scss";
import { FourProps } from "./Four.types.ts"

const Four = ({ }: FourProps) => {
    const [{text}] = useContext(AppContext);
    return (
        <div>
            {text}
        </div>
    )
}

export default Four 
