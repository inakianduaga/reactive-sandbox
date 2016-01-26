import IState from './IState';
import * as Actions from './Actions';
import IStandardAction from '../types/IAction';

const initialState: IState = {
  angle: 0,
};

const updateAngle = (state: IState, action: Actions.IUpdateAngle): IState =>
  Object.assign({}, state, { angle: action.payload });

export default function reducer(state: IState = initialState, action: IStandardAction): IState {
  switch (action.type) {
    case Actions.UPDATE_ANGLE:
      return updateAngle(state, <Actions.IUpdateAngle> action);
    default:
      return state;
  }
};
