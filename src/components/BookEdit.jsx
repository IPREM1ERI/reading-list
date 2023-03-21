import { useState, useContext } from "react"
import BooksContext from "../context/books"

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBook } = useContext(BooksContext);

  const handleChange = (evt) => {
    setTitle(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
    editBook(book.id, title)
  }

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  )
}

export default BookEdit

