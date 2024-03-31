
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: '', 
    author: '',
    onlyFavorite: false
}

const filterSlice = createSlice({
    initialState,
    name: 'filter',
    reducers: {
        setTitleFilter: (state, action) => {
            state.title = action.payload
        },
        setAuthorFilter: (state, action) => {
            state.author = action.payload
        },
        resetFilters: () => {
            return initialState
        }, 
        setOnlyFavoriteFilter: (state,action) => {
             state.onlyFavorite = action.payload
        }
        }
})
export const { setTitleFilter, setAuthorFilter, resetFilters, setOnlyFavoriteFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite

export default filterSlice.reducer;