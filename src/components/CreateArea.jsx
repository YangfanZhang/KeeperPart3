import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  function handleChange(event) {
    let userInput = event.target;
    setNewNote(prevValue => {
      return {
        ...prevValue,
        [userInput.name]: userInput.value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(newNote);
    event.preventDefault();
    setNewNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={newNote.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
