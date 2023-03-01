
import './App.css';
import { useState } from 'react';
import NotesList from './componenets/NotesList';
import Search from './componenets/Search';
import {nanoid} from 'nanoid'
//import Hallo from './componenets/Hallo';


function App() {
  //const {name,prenom}=useContext(Hallo)
  const[notes,setNotes]=useState([
    {
    id:nanoid(),
    text:"title",
    date:"20/11/2022",
  },
  {
    id:nanoid(),
    text:"title",
    date:"20/11/2022",
  },
  {
    id:nanoid(),
    text:"title",
    date:"20/11/2022",
  },
  {
    id:nanoid(),
    text:"title",
    date:"20/11/2022",
  },
]);
const [search,setSearch]=useState('')
const addNote=(text)=>{
  const date=new Date();
  const newNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString(),
  };
  const newNotes=[...notes,newNote];
  setNotes(newNotes)
};

const deleteNote =(id)=>{
  const newNotes= notes.filter((note)=>note.id!==id)
  setNotes(newNotes)
}

  return (
    <div className="App">
        <Search  handleSearch={setSearch}/>
        <NotesList notes={notes.filter((note)=>note.text.toLocaleLowerCase().includes(search))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
        
    </div>
  );
}
export default App;

/*export default App;
import React from 'react'
import { useReducer } from 'react';
function countRedu(state,action){
  if(action==='Increment')
    return state+1;
  if(action ==='decerement')
   return state-1
}
const App = () => {
  count[count,dispatch]=useReducer(countRedu,0);
  
  return (
    <div>
      <button onClick={()=>dispatch('Increment')}>Increment</button>
      <p>count:</p>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
    </div>
  )
}

export default App*/
