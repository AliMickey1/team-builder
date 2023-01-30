import logo from './logo.svg';
import React, { useState } from 'react';

import Form from './Components/form'
import './App.css';

function App(props) {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({
    name: "",
    Email: "",
    Role: ""
  });

const onSubmit = () => {
  setMembers([values, ...members]);
  setValues({name: '', email: '', role: ''})
}

const onChange = (name, value) => {
  setValues({...values, [name]: value})
}



  return (
    <div className="App">
 
        <h1>Team Builder App</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
        />

      {members.map((member,idx) => {
        return (
          <div key={idx}>
            {member.email}, {member.name}, {member.role}
            </div>
        )
      })}


    </div>
  );
}

export default App;
