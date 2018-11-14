import { combineReducers } from 'redux';
import PostsReducer from "./reducer_popsts";

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
