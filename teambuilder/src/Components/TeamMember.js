import React, {useState} from 'react';



function TeamMember(props) {

  const [member, setMember] = useState(props.person)

    const [editing, setEditing] = useState(false)

    const handleChange = e => setMember({ ...member, [e.target.name]: e.target.value })
    if (editing){

      return (
        <>
            <input type="text" onChange={handleChange} name='name' value={member.name} />
            <input type="email" onChange={handleChange} name= 'email'value={member.email} />
            <input type="text" onChange={handleChange} name='role' value={member.role} />
            <button onClick={() => {
                props.update(member)
                setEditing(!editing)
            }}>Update</button>
        </>
    )

    }else {
      return (
        <div className="App">
        <p>Name: {props.person.name}</p>
        <p>Email: {props.person.email}</p>
        <p>Role: {props.person.role}</p>
        <button onClick={() => setEditing(!editing)}>Update</button>
        <button onClick={() => props.del(member)}>Delete</button>
        </div>
      );
    }
  
  
  
}

export default TeamMember;