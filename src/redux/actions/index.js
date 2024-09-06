
export const ADD_ALBUM = 'ADD_ALBUM'
export const ADD_FAVORITE_ALBUM = 'ADD_FAVORITE_ALBUM'
export const REMOVE_FAVORITE_ALBUM = 'REMOVE_FAVORITE_ALBUM'
export const ADD_SEL = 'ADD_SEL'


export const addToAlbumAvtion = (alb1) => {
    return {
        type: ADD_ALBUM,
        payload: alb1
            
        
    }

}


export const addToFavoriteAction = (data) => {
    return {
        type: ADD_FAVORITE_ALBUM,
        payload: data
        
    }

}
export const removeToFavoriteAction = (data) => {
    return {
        type: REMOVE_FAVORITE_ALBUM,
        payload: data
        
    }

}
export const addSelAction = (data) => {
    return {
        type: ADD_SEL,
        payload: data
        
    }

}

