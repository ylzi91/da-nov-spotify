import { ADD_ALBUM } from "../actions"



const initialState = {
    genericsAlbum: [],
}

 const myAlbumReducers = ( state = initialState, action ) => {
    switch(action.type){
        case ADD_ALBUM: {
            return {
                genericsAlbum: action.payload,
            }
        }

        default: {
            return state
        }
    }
}

export default myAlbumReducers