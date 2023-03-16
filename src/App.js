import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log('Book title:', title)
  };

  const editBook = () => {

  };

  const deleteBook = () => {

  };


  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
