import styles from "./Candidate.module.scss";
import { CandidateProps } from "./Candidate.types";

const Candidate = (props: CandidateProps) => {
    return (
        <div className={styles.Candidate}>
            <h2>{props.name}</h2>
            <span>{props.message}</span>
        </div>
    )
}

export default Candidate;