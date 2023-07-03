const Friend = ({ friend, unFriend }) => {
  //   console.log(props);
  return <li onClick={() => unFriend(friend)}>
    {friend}
</li>;
};

export default Friend;
