import IState from './IState';
import * as Actions from './Actions';
import IStandardAction from '../types/IAction';

const initialState: IState = [];

/**
 * TODO: USE IMMUTABLE COLLECTION, OTHERWISE THIS IS MUTATING STATE!!!
 */
const setRay = (state: IState, action: Actions.ISetRay): IState => {

  const index = state.findIndex(ray => ray.id === action.payload.id);

  if (index) {
    state[index] = action.payload;
  } else {
    state.push(action.payload);
  }

  return state;
};

export default function reducer(state: IState = initialState, action: IStandardAction): IState {
  switch (action.type) {
    case Actions.SET_RAY:
      return setRay(state, <Actions.ISetRay> action);
    default:
      return state;
  }
};
