import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, selectBooks, toggleFavorite } from '../../redux/slices/booksSlice';
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilter } from '../../redux/slices/filterSlices';
import './BookList.css';

const BookList = () => {
  const books = useSelector(selectBooks)
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }

  const handelToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase())
    const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase())
    const mathesFavorite = onlyFavoriteFilter ? book.isFavorite : true
    console.log(mathesFavorite)
    return matchesTitle && matchesAuthor && mathesFavorite
  })

  const highlightMatch = (text, filter) => {
    if (!filter) return text
    
    const regex = new RegExp(`(${filter})`, 'gi')
    return text.split(regex).map((substring, index) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return <span key={index} className='highlight'>{substring}</span>
      } return substring
    })
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0
      ? <p>No books available</p>
        : <ul>{filteredBooks.map((book, i) =>
          <li key={book.id}>
            <div className='book-info'>
              { ++i}. {highlightMatch(book.title, titleFilter)} by <strong>{highlightMatch(book.author, authorFilter)}</strong>
            </div>
            <span onClick={() =>handelToggleFavorite(book.id)}>
            {book.isFavorite
              ? <BsBookmarkStarFill className='star-icon' />
              : <BsBookmarkStar className='star-icon' />
            }
            </span>
            <div className='book-actions'>
              <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
            </div>
          </li>
        )}
        </ul>
      }
    </div>
  );
};

export default BookList;
