import styles from "./Server.module.scss";
import { ServerProps } from "./Server.types.ts"

const Server = ({ name, status, on, off }: ServerProps) => {
    return (
        <div className={`${styles.Server} ${styles[status]}`}>
            <span>{name}</span>
            <span>{status}</span>
            <span>
                <button
                    onClick={on}
                >
                    Start Server
                </button>
                <button
                    onClick={off}
                >
                    Shut Down Server
                </button>
            </span>
        </div>
    );
}

export default Server 
