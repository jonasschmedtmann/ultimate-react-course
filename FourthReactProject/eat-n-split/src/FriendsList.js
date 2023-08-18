import Friend from "./Friend";

export default function FriendsList({ friends, selectedFriend, onSelected }) {
  return (
    <ul>
      {friends.map((oneFriend) => (
        <Friend
          key={oneFriend.id}
          friend={oneFriend}
          selectedFriend={selectedFriend}
          onSelected={onSelected}
        />
      ))}
    </ul>
  );
}
