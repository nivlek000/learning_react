// ADD_COMMENTS
// LIKE_IMAGES
import * as types from '../constants';
//import { ADD_COMMENTS } from '../constants';


export const addComment = (author, comment) => ({
    type: types.ADD_COMMENTS,
    //before ES6
    author: author,
    //ES6
    comment
  });
