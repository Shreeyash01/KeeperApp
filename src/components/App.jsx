import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notesA from "../notesA";
import CreateArea from "./CreateArea";


// function newNotes(note){
//     return(
//         <Note 
//             key={note.key}
//             title={note.title}
//             content={note.content}
//         />
//     );
// }

function App() {
    const [notes,setNotes]=useState([]);
    
    function addNote(newNote){
        setNotes(prevNotes=>{
            return [...prevNotes,newNote];
        })
    }
    function deleteNote(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((noteItem,index)=>{
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />

            <CreateArea onAdd={addNote} />
            
            {notes.map( (noteItem,index) =>{
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}

            <Note
                title="First Note"
                content="This is the first Note."
            />

            {notesA.map( note => (<Note key={note.key} title={note.title} content={note.content} /> ))}

            <Footer />
        </div>
    );
}

export default App;