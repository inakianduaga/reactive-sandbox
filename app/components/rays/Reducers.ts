import IState from './IState';
import * as Actions from './Actions';
import IStandardAction from '../types/IAction';

const initialState: IState = [];

const addRay = (state: IState, action: Actions.IAddRay): IState =>
  state; // todo

export default function reducer(state: IState = initialState, action: IStandardAction): IState {
  switch (action.type) {
    case Actions.ADD_RAY:
      return addRay(state, <Actions.IAddRay> action);
    default:
      return state;
  }
};
