import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

const Button = ({ children, ...restOfTheProps }: ButtonProps) => {

    const classes = `${styles.Button} ${restOfTheProps.className}`;
    return (
        <button 
            {...restOfTheProps}

            className={classes}
        >{children}</button>
    )
}

export default Button;