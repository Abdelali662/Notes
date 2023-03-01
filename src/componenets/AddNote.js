import {useState} from 'react';

const AddNote = ({handleAddNote}) => {
    const[noteText,setNoteText]=useState('');
    const charchterLimit=200;
    const handleChange=(event)=>{
        if(charchterLimit-event.target.value.length>=0){ 
        setNoteText(event.target.value);
        }
    };
    const handleSaveClick=()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }

    }
  return (
    <div className='note new'>
        <textarea rows="8" cols="10" placeholder='create your Note' value={noteText} onChange={handleChange}></textarea>
        <div className='note-footer'>
            <small>{charchterLimit-noteText.length} Words</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>

    </div>
  )
}

export default AddNote