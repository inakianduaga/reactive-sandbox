import { Reducer, combineReducers } from 'redux';
import canonReducer from './components/cannon/Reducers';
import rayReducer from './components/rays/Reducers';

const rootReducer = combineReducers({
  canon: canonReducer,
  rays: rayReducer,
});

export default rootReducer;
