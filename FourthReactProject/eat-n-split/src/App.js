import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";
import FormSplitBill from "./FormSplitBill";
import Button from "./Button";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleToggleAddFriend() {
    setIsOpen((prev) => !prev);
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setIsOpen(false);
  }

  function handleSelectedFriend(selected) {
    setSelectedFriend(selected);
    setIsOpen(false);
  }

  function handleSplitBill(balanceAddition) {
    console.log(balanceAddition);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + balanceAddition }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelected={handleSelectedFriend}
        />
        {isOpen ? <AddFriend onAddFriend={handleAddFriend} /> : null}
        <Button
          text={isOpen ? "Close" : "Add Friend"}
          click={handleToggleAddFriend}
        />
      </div>
      {selectedFriend ? (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      ) : null}
    </div>
  );
}

export default App;
