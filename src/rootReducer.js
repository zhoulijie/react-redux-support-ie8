import {combineReducers} from 'redux';
import todos from './containers/App/reducer';

const rootReducer = combineReducers({
    todos
});

export default rootReducer;
