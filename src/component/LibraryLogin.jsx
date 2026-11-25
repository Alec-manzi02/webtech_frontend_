import React, { useState } from 'react'
import LibraryButton from './LibraryButton'

function LibraryLogin() {

  const [DoYouHaveAnAccount, setDoYouHaveAnAccount] = useState(false);

  function handleLoginClick() {
    setDoYouHaveAnAccount(previous => !previous);
  }

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    alert(`Log in of username of ${userName} succesful`);
  }

  return (
    <>  <div style={{}}>
      {DoYouHaveAnAccount ? (
        <div class="main_form">
          <label>UserName:</label>
          <input type="text" placeholder='Enter your name' value={userName} onChange={(e) => setUserName(e.target.value)} /> <br />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
          <LibraryButton buttonLabel="Login" onClickButton={handleLogin} /> <br />
          <label>New Here? </label> <LibraryButton buttonLabel="Create" onClickButton={handleLoginClick} />
        </div>
      ) : (
        <div>
          <label>StudentID:</label>
          <input type="text" placeholder='Enter your ID' /> <br />
          <label>Email:</label>
          <input type="email" placeholder='Enter your email' /> <br />
          <label>Password:</label>
          <input type="password" /> <br />
          <label>Confirm Password:</label>
          <input type="password" /> <br />
          <LibraryButton buttonLabel="Register" />
          <label>Already have an account? </label> <LibraryButton buttonLabel="Login" onClickButton={handleLoginClick} />
        </div>
      )}
    </div>
    </>
  )
}

export default LibraryLogin