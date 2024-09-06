

import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import myAlbumReducers from "../reducers/myAlbum";
import { addToFavoriteAction } from "../actions";
import myFavoriteReducers from "../reducers/favoriteAlbum";
import selectedReducers from "../reducers/selected";

const allReducers = combineReducers({
    myAlbum: myAlbumReducers,
    favorite: myFavoriteReducers,
    selected: selectedReducers
})

const store = configureStore({
    reducer: allReducers,
})

export default store