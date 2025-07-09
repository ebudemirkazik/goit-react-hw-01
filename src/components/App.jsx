import React from "react";
import Profile from "./profile/profileApp.jsx";
import userData from "./profile/userData.json";
import FriendList from "./friendList/FriendList.jsx";
import friends from "./friendList/friends.json";
import TransactionHistory from "./transactionHistory/TransactionHistory.jsx";
import transactions from "./transactionHistory/Transaction.json";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
