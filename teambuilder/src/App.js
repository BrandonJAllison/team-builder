import React, {useState, useEffect} from 'react';
import Form from './Components/Form'
import TeamMember from './Components/TeamMember'
import './App.css';

function App() {
  
 const [teamMember, setTeamMember]= useState([])
  console.log(teamMember)
  
 const update = single => setTeamMember([...teamMember.map(member => {
  if (single.id === member.id) return single
  return member
})])

 const del = single => {
 
   return setTeamMember([...teamMember.filter(member =>{ 
      console.log(member, single)
     return single.id !== member.id
    })])

  }

  return (
    <div className="App">
     <Form setTeamMember={setTeamMember} teamMember={teamMember} />
     {teamMember.map((person, index) => <TeamMember  key={index} update={update} del={del} person={person}/>)}
    </div>
  );

}

  


export default App;
