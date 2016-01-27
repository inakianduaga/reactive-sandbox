import IState from './IState';
import * as Actions from './Actions';
import IStandardAction from '../types/IAction';

const initialState: IState = {
  angle: 0,
  power: 0,
};

const updateAngle = (state: IState, action: Actions.IUpdateAngle): IState =>
  Object.assign({}, state, { angle: action.payload });

const updatePower = (state: IState, action: Actions.IUpdatePower): IState =>
  Object.assign({}, state, { power: action.payload });

const increasePower = (state: IState, action: Actions.IIncreasePower): IState =>
  Object.assign({}, state, { power: Math.min(state.power + 1, 10) });

export default function reducer(state: IState = initialState, action: IStandardAction): IState {
  switch (action.type) {
    case Actions.UPDATE_ANGLE:
      return updateAngle(state, <Actions.IUpdateAngle> action);
    case Actions.UPDATE_POWER:
      return updatePower(state, <Actions.IUpdatePower> action);
    case Actions.INCREASE_POWER:
      return increasePower(state, <Actions.IIncreasePower> action);
    default:
      return state;
  }
};
