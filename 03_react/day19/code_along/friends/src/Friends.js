import { useState } from "react";
import Friend from "./Friend";

const Friends = () => {
  const [friends, setFriends] = useState([
    "Alice",
    "Bob",
    "Charlie",
    "Dhivyan",
    "Emma",
  ]);

  //To remove one friend from the list
  const unFriend = (friendName) => {
    //Filters based on whatever value has been passed
    const newFriends = friends.filter((friend) => friend !== friendName);
    // console.log(newFriends);

    //Removes the first element in the array
    //const newFriends = friends.slice(1);

    //Update the state using setFriends
    setFriends(newFriends);
  };

  return (
    <>
      <ul>
        {friends.map((friend, index) => (
          <Friend key={index} friend={friend} unFriend={unFriend} />
        ))}
      </ul>
      {/* <button onClick={unFriend}>Un Friend Someone</button> */}
    </>
  );
};

export default Friends;
