import React, { createContext, useState } from 'react';
import { v1 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {

  const [books, setBooks] = useState([
    {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    {title: 'hippy', author: 'paulo coleho', id: 2}
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: v1() }])
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  };

  return(
    <BookContext.Provider value={{books, addBook, removeBook}}>
      { props.children }
    </BookContext.Provider>
  );
}

export default BookContextProvider;
