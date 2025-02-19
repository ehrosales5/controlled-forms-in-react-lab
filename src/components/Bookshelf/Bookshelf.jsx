import { useState } from "react";





const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, The Witch, and the Wardrobe', author: 'C.S. Lewis' },
    ])

    //===========================================
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })

    //===========================================    
    const handleInputChange = (event) => {
        setNewBooks({ ...newBooks, [event.target.name]: event.target.value });
      };

    //===========================================
    const handleSubmit = (e) => {
        e.preventDefault()
        setBooks([...books, newBook])
    }

    return (
        <>
          <div className="bookshelfDiv">
            <div className="formDiv">
              <h3>Add a Book</h3>
              <form onSubmit={handlesubmit}>
                <label htmlFor="title">Title:</label>
                <input
                  id="title"
                  name="title"
                  value={newBooks.title}
                  onChange={handleInputChange}
                ></input>
    
                <label htmlFor="author">Author:</label>
                <input
                  id="author"
                  name="author"
                  value={newBooks.author}
                  onChange={handleInputChange}
                ></input>
    
                <button type="submit">Add Book</button>
              </form>
            </div>
            <div className="bookCardsDiv">{books.map((book,index) => (
              <li key={index}>
                <strong>{book.title}</strong> {book.author}
              </li>
            ))}</div>
          </div>
        </>
      );
    };


export default Bookshelf
