import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => [...prevItems, inputText]);
    // console.log(inputText);
    // console.log(items);
  }

  function delItem(id) {
    // console.log(id);

    setItems((prevItems) => prevItems.filter((x, ind) => ind !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea add={addItem} />

      {items.map((item, id) => (
        <Note
          id={id}
          key={id}
          title={item.title}
          content={item.content}
          del={delItem}
        />
      ))}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
