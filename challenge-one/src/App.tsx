import { useState } from "react";
import Friend from "./components/Friend/Friend";


const App = () => {

  // friendsState has 2 elements
  // 1. the current value of the state
  // 2. fn that updates the state
  // ALWAYS KEEP STATE IMMUTABLE
  const [friends, updateFriends] = useState([
    {
      id: 1,
      name: "Arnav",
      age: 22,
      address: {
        city: "Belgaum",
        country: "India"
      },
      hobbies: ["badminton", "cricket"]
    },
    {
      id: 2,
      name: "Soham",
      address: {
        city: "Pune",
        country: "India"
      },
      age: 22,
      hobbies: ["biking", "cricket"]
    }
  ])
  // const [friends, updateFriends] = friendsState;

  const handleIncrementAge = (id: number) => {
    const friendsClone = [...friends];
    const friendIndex = friendsClone.findIndex(f => f.id === id);

    friendsClone[friendIndex].age += 1;

    console.log(friendsClone);

    // 1. update the state of friends
    // 2. ask react to rerender the component
    updateFriends(friendsClone);
  }

  return (
    <>
    
      {
        friends.map(friend => {
          return (
            <Friend
              key={friend.id}
              name={friend.name}
              address={friend.address}
              age={friend.age}
              hobbies={friend.hobbies}
              incrementAge={() => handleIncrementAge(friend.id)}
            />
          )
        })
      }
    </>
  )
}

export default App;