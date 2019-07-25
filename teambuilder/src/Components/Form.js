import React, { useState } from "react";
import TeamMember from "./TeamMember";


function Form(props) {

const [member, setMember] = useState({ name: "", email: "", role: "", id: parseInt(Math.random() * 1000000000)});

  const handleChange = event => {
    setMember({ ...member,[event.target.name]: event.target.value });
  };

  // const handleEmailChange = event => {
  //   setMember({ ...member, email: event.target.value });
  // };

  // const handleRoleChange = event => {
  //   setMember({ ...member, role: event.target.value });
  // };

  const handleSubmit = event => {
    event.preventDefault();
    setNewMember(member);
    setMember({ name: "", email: "", role: "", id: parseInt(Math.random() * 1000000000)})
    console.log(member);
  };

  const setNewMember = (member) => {
      props.setTeamMember([...props.teamMember, member])
  }
  

  return (
    <div className="App">
     
      <form onSubmit={event => handleSubmit(event)}>

        <label>
          Name:
          <input
            type="text"
            name="name"
            required='required'
            value={member.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            value={member.email}
            type="text"
            name="email"
            required='required'
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            value={member.role}
            name="role"
            required='required'
            onChange={event => handleChange(event)}
          />
        </label>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

export default Form;