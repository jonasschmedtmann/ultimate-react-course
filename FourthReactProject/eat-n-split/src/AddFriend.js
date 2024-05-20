import Button from "./Button";
import { useState } from "react";

function AddFriend({ onAddFriend }) {
  const initialValues = { name: "", image: "https://i.pravatar.cc/48" };
  const [newFriend, setNewFriend] = useState(initialValues);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewFriend({ ...newFriend, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!newFriend.name || !newFriend.image) return;
    const id = crypto.randomUUID();

    const newlyAddedFriend = {
      ...newFriend,
      balance: 0,
      image: `${newFriend.image}?=${id}`,
      id,
    };

    onAddFriend(newlyAddedFriend);
    setNewFriend(initialValues);
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">👩🏾‍🤝‍👨🏻 Friend name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={newFriend.name}
        onChange={handleChange}
      />
      <label htmlFor="image">📸 Image URL</label>
      <input
        type="text"
        id="image"
        name="image"
        value={newFriend.image}
        onChange={handleChange}
      />
      <Button text="Add" />
    </form>
  );
}

export default AddFriend;
