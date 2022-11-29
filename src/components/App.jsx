import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

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
    return (
        <div>
            <Header />
            <Note
                title="First Note"
                content="This is the first Note."
            />
            {/* {notes.map( (note) =>
                (
                    <Note
                        key={note.key}
                        title={note.title}
                        content={note.content}
                    />
                )
            )}; */}

            {notes.map( note => (<Note key={note.key} title={note.title} content={note.content} /> ))}

            <Footer />
        </div>
    );
}

export default App;