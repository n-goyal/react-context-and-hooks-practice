import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';

// functional component consuming contexts
const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { books } = useContext(BookContext);

  return (
    <div className="book-list" style={{
        color: theme.syntax,
        background: theme.bg
      }}>
      <div onClick={toggleAuth}>
        { isAuthenticated ? 'Logged In' : 'Logged Out'}
      </div>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{background: theme.ui}}>{book.title}</li>
          );
        })}
      </ul>
    </div>
  )
}

// class component consuming contexts
/*
class BookList extends Component {

  render() {
    return (
      <AuthContext>{(authContext)=>(
        <ThemeContext.Consumer>{(themeContext)=>{
          const {isAuthenticated, toggleAuth} = authContext;
          const {isLightTheme, light, dark} = themeContext;
          const theme = isLightTheme ? light : dark
           return (
             <div className="book-list" style={{
                color: theme.syntax,
                background: theme.bg
              }}>
              <div onClick={toggleAuth}>
                { isAuthenticated ? 'Logged In' : 'Logged Out'}
              </div>
              <ul>
                <li style={{background: theme.ui}}>The way of the kings</li>
                <li style={{background: theme.ui}}>name of the winds</li>
                <li style={{background: theme.ui}}>the final empire</li>
              </ul>
            </div>
          )}}</ThemeContext.Consumer>
        )}</AuthContext>
    );
  }
}
*/

export default BookList;
