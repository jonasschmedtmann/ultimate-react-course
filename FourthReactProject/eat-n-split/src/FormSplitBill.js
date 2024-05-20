import Button from "./Button";
import { useState } from "react";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const { name } = selectedFriend;
  const [total, setTotal] = useState("");
  const [myPortion, setMyPortion] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("you");
  const theirPortion = total - myPortion;

  function handleSubmit(e) {
    e.preventDefault();

    if (!total || !myPortion) return;
    onSplitBill(whoIsPaying === "you" ? theirPortion : -myPortion);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {name}</h2>
      <label htmlFor="total">💰 Bill value</label>
      <input
        type="text"
        id="total"
        value={total}
        onChange={(e) => setTotal(Number(e.target.value))}
      />

      <label htmlFor="myPortion">👩🏾 Your expense</label>
      <input
        type="text"
        id="myPortion"
        value={myPortion}
        onChange={(e) =>
          setMyPortion(
            Number(e.target.value) > total ? myPortion : Number(e.target.value)
          )
        }
      />

      <label htmlFor="theirPortion">{`🙋🏼 ${name}'s expense`}</label>
      <input type="text" id="theirPortion" disabled value={theirPortion} />

      <label htmlFor="paying">🤑 Who is paying the bill?</label>
      <select
        name="paying"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{name}</option>
      </select>
      <Button text="Split bill" />
    </form>
  );
}

export default FormSplitBill;
