import React, { useState } from 'react'

function FriendList() {
    const [friends, setFriends] = useState(["Victoria", "Ben", "Derrick", "Anna"]);


    function addFriend(){
      const newFriend = document.getElementById("friendInput").value;
      document.getElementById("friendInput").value = "";
      setFriends([...friends, newFriend])
    };

    function removeFriend(index){
      setFriends(friends.filter((_, i) => i !== index));
    }




  return (
    <div className='my-component'>
      <h1>Friend List</h1>
      <ul>
        {friends.map((friend, index) => 
        <li key={index} onClick={() => removeFriend(index)}>
          {friend}
        </li>)}
      </ul>
      <input type="text" id='friendInput' placeholder='Enter a friends name' />
      <button onClick={addFriend}>Add</button>
    </div>
  )
}

export default FriendList