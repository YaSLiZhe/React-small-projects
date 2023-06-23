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

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState("");

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };
  const handleShowAdd = () => {
    setShowAddFriend((show) => !show);
  };
  const handleSelected = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };
  const handleSplitBill = (value) => {
    setFriends(
      friends.map((friend) =>
        friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelection={handleSelected} selectedFriend={selectedFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAdd}>{showAddFriend ? "Close" : "Add Friend"}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend} />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      ) : (
        <p> {friend.name} and you are even</p>
      )}
      <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🤼‍♂️ Friend Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>📸 Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      <Button>Add Friend</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const paidByFriend = bill ? bill - myExpense : "";
  const [isPaying, setIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !myExpense) return;
    onSplitBill(isPaying === "user" ? paidByFriend : -myExpense);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill With {selectedFriend.name}</h2>
      <label>👑 Bill Value</label>
      <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
      <label>😁 Your Expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => setMyExpense(Number(e.target.value) > bill ? myExpense : Number(e.target.value))}
      />
      <label>🏄🏻‍♀️ X's Expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>Who is paying the bill</label>
      <select value={isPaying} onChange={(e) => setIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
