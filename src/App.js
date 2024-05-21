import React, {useState} from 'react';
import './App.css';
import Form from './components/form'
import Btn from './components/btn'


const App = () => {

  const [fullName, setFullName] = useState ('');
  const [email, setEmail] = useState ('');
  const [phoneNumber, setPhoneNumber] = useState ('');

  const handleSubmit = (event) => {
    event.preventDefault();
    

    setFullName('');
    setEmail   ('');
    setPhoneNumber('');

    if (!fullName ||!email ||!phoneNumber) {
      console.log('Error: All fields must be filled out.');
      return;
    }

    console.log(`Full Name: ${fullName}, Email: ${email}, Phone Number: ${phoneNumber}`);
  };

  

 
  

  return (
    <div className="App">
      <h1>Welcome To Rent-Vue</h1>
      <p>Sign-in If You Already Have An Account Or Sign-Up If You Are Yet To Create Account.</p>
       
      <Form labelValue="Full Name" inputType="text" onChange={(e) => setFullName(e.target.value)} />
      <Form labelValue="Email Address" inputType="email" onChange={(e) => setEmail(e.target.value)}  />
      <Form labelValue="Phone Number" inputType="number" onChange={(e) => setPhoneNumber(e.target.value)} />
      <Btn onClick={handleSubmit}>Submit</Btn>
    </div>
  );
}

export default App;
