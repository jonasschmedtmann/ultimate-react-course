import { useState } from "react";
import "./App.css";

const reviews = [
  { rating: 0, review: "Dissatisfied" },
  { rating: 5, review: "It was okay" },
  { rating: 10, review: "It was good" },
  { rating: 20, review: "Absolutely amazing!" },
];

function App() {
  const [bill, setBill] = useState(0);
  const [yourRating, setYourRating] = useState(reviews[0].rating);
  const [friendsRating, setFriendsRating] = useState(reviews[0].rating);
  return (
    <div>
      <Form
        bill={bill}
        onBill={setBill}
        onYourRating={yourRating}
        onFriendsRating={friendsRating}
        onSetYourRating={setYourRating}
        onSetFriendsRating={setFriendsRating}
      />
      <Total
        bill={bill}
        yourRating={yourRating}
        friendsRating={friendsRating}
      />
      <Reset
        onBill={setBill}
        onSetYourRating={setYourRating}
        onSetFriendsRating={setFriendsRating}
      />
    </div>
  );
}

function Form({
  bill,
  onBill,
  onYourRating,
  onFriendsRating,
  onSetYourRating,
  onSetFriendsRating,
}) {
  return (
    <div>
      <form>
        How much was the bill?
        <input
          type="text"
          placeholder="bill..."
          value={bill}
          onChange={(e) => onBill(Number(e.target.value))}
        />
        <Percentage
          rating={onYourRating}
          setRating={onSetYourRating}
          text="How did you like the service?"
        />
        <Percentage
          rating={onFriendsRating}
          setRating={onSetFriendsRating}
          text="How did your friend like the service?"
        />
      </form>
    </div>
  );
}
function Percentage({ rating, setRating, text }) {
  return (
    <p>
      {text}
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        {reviews.map((el) => (
          <option key={el.review} value={el.rating}>
            {el.review} {el.rating}%
          </option>
        ))}
      </select>
    </p>
  );
}
function Total({ bill, yourRating, friendsRating }) {
  const myRating = bill * (yourRating / 100);
  const myFriendRating = bill * (friendsRating / 100);
  return (
    <div className="pay">
      <b>
        You pay ${bill + myRating + myFriendRating} (${myRating}+ $
        {myFriendRating})
      </b>
    </div>
  );
}
function Reset({ onBill, onSetYourRating, onSetFriendsRating }) {
  return (
    <button
      onClick={() => {
        onBill(0);
        onSetYourRating(reviews[0].rating);
        onSetFriendsRating(reviews[0].rating);
      }}
    >
      Reset
    </button>
  );
}
export default App;
