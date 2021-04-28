import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const [userData, setUserData] = useState([]);

  // Increment the counter
  let incrementCounter = () => {
    setCounter(counter + 1)
  }

  // Reset the counter
  let resetCounter = () => {
    setCounter(0)
  }

  // Fetch the api
  let getUserList = async () => {
    let userDataInfo = await axios.get('https://randomuser.me/api').then(userData => { return userData.data.results });
    // We have to stringify to display the data in webpage
    setUserData(userDataInfo);
  }

  // Fetch the api
  let fetchNewUser = async () => {
    incrementCounter();
    let newUserData = await axios.get(`https://randomuser.me/api?page=${counter}`).then(userData => { return userData.data.results });
    // We have to stringify to display the data in webpage
    let newUserInfos = [...newUserData, userData]

    setUserData(newUserInfos.flat());
    // console.log(userData);
    // userDataInfo.map(e=>console.log(e.name));
  }

  return (
    <div className="App">
      <p>
        {counter}
      </p>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={resetCounter}>Reset Counter</button>
      <button onClick={getUserList}>Get User list</button>
      <button onClick={fetchNewUser}>Fetch Next User</button>
      {console.log(userData)}
      {userData.map((e, key) => 
      <>
        <p>{e.name.first}</p>
        <img src={e.picture.large} />
      </>
      )}
    </div>
  );
}

export default App;



// 1. Increment the counter  using button
// 2. Api Fetching and printing the results
// 3. Display all data with names and images only
// 4. Pagination in api fetching
// 5. Correct linting as that's the way if using the standard for hooks
// 6. HOC
// 7. Promise/async await


// How to changes request parameters from api
// https://randomuser.me/api?page=3