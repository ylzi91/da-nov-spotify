import { ADD_FAVORITE_ALBUM, REMOVE_FAVORITE_ALBUM } from "../actions";

const initialState = {
  albums: [],
};

const myFavoriteReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_ALBUM:
      return {
        albums: [...state.albums, action.payload],
      };

    case REMOVE_FAVORITE_ALBUM:
      return {
        albums: state.albums.filter((albums) => albums.id !== action.payload),
      };

    default: {
      return state;
    }
  }
};

export default myFavoriteReducers;
