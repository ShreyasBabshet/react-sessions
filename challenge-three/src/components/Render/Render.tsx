import { useState } from "react";
import styles from "./Render.module.scss"; 
import { RenderProps } from "./Render.types.ts" 
 
const Render = ({ elem }: RenderProps) => { 
    const randomState = useState(Math.random() * 10);
    
    return (
        <>
            {
                elem(randomState)
            }
        </>
    )
} 
 
export default Render 
