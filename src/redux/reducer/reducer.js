import { combineReducers } from 'redux';

import arrWordsReducer from './arrWordsReducer';
import filterStatusReducer from './filterStatusReducer';
import isAddingReducer from './isAddingReducer';
// tao ra store
const reducer = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer
});

export default reducer;