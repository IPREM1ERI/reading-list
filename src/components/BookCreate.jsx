import { useState } from "react"

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('')

  const handleChange = (evt) => {
    setTitle(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onCreate(title)
  }

  return (
    <form>
      <label>Title</label>
      <input  value={title} onChange={handleChange} />
      <button onSubmit={handleSubmit}>Create!</button>
    </form>
    )
    
}

export default BookCreate