import { memo } from "react";
import styles from "./Friend.module.scss";
import { FriendProps } from "./Friend.types"

const Friend = ({ name, age, address, hobbies, incrementAge }: FriendProps) => {
    console.log('rendering component...')

    // const handleIncrementAge = () => {
    //     // BAD PRACTICE -> PROPS SHOULD REMAIN IMMUTABLE
    //     age += 1;
    //     console.log("new age =>", age);
    // }

    return (
        <div className={styles.Friend}>
            <h2>{name}</h2>
            <p>{age}, {address.city} {address.country}</p>
            {
                hobbies.map(hobby => {
                    return <span key={Math.random().toString(16)}>{hobby} </span>
                })
            }
            <div>
                <button onClick={incrementAge}>increment age</button>
            </div>
        </div>
    )
}

// memoization is not a silver bullet
export default memo(Friend, (prevProps: FriendProps, nextProps: FriendProps) => {
    const { name: pName, age: pAge, address: pAddress, hobbies: pHobbies } = prevProps;
    const { name: nName, age: nAge, address: nAddress, hobbies: nHobbies } = nextProps;
    if(pName !== nName || pAge !== nAge || pAddress !== nAddress || pHobbies !== nHobbies) {
        return false;
    }
    return true
});