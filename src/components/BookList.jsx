import BookShow from "./BookShow"
import { useContext } from "react"
import BooksContext from "../context/books"


function BookList({ books, onDelete, onEdit }) {
  const { count, increamentCount } = useContext(BooksContext)
  const renderedBooks = books.map((book) => {
    return <BookShow 
      key={book.id} 
      book={book} 
      onDelete={onDelete} 
      onEdit={onEdit}
    />
  })
  return (
    <div className="book-list">
      {count}
      <button onClick={increamentCount}>Click</button>
      {renderedBooks}
    </div>
  )
}

export default BookList