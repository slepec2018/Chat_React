export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';

export const updateAuthor = (name) => {
    return {
        type: UPDATE_AUTHOR,
        payload: name
    }
};