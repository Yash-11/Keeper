import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function update(event) {
    const { name, value } = event.target;
    setnote((x) => ({ ...x, [name]: value }));
    // console.log(note);
  }

  function addnotes(event) {
    props.add(note);
    setnote({
      title: "",
      content: ""
    });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={update}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={update}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={addnotes}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
