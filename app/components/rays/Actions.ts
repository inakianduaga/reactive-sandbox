import IStandardAction from '../../types/IAction';
import { IPosition, IVelocity } from './IState';

export const ADD_RAY = 'ADD_RAY';

export interface IAddRay extends IStandardAction {
  payload: {
    id: number,
    position: IPosition,
    velocity: IVelocity,
  };
};

export const addRay = (id: number, position: IPosition, velocity: IVelocity) => ({
  payload: {
    id,
    position,
    velocity,
  },
  type: ADD_RAY,
});
