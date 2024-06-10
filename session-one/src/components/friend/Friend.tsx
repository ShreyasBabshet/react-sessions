import styles from "./Friend.module.scss";

const Friend = () => {

    console.log(styles);

    return (
        <p className={styles.friend}>Friend Works!!</p>
    )
}

export default Friend;