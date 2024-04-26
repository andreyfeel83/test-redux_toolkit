import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './slices/booksSlice'
import filterReducer from './slices/filterSlices'
import errorReducer from './slices/errorSlice'

const store = configureStore({
    reducer: {
        books: bookReducer,
        filter: filterReducer,
        error: errorReducer
    }
})

export default store