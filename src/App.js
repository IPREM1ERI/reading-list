import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, { id: Math.round(Math.random() * 9999), title: title }]

    setBooks(updatedBooks)
  };

  // const editBook = () => {

  // };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  };


  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBook} />
      <BookCreate onCreate={createBook} />

    </div>
  );
}

export default App;
