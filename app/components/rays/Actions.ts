import IStandardAction from '../../types/IAction';
import { IPosition, IVelocity } from './IState';

export const SET_RAY = 'ADD_RAY';

export interface ISetRay extends IStandardAction {
  payload: {
    id: number,
    position: IPosition,
    velocity: IVelocity,
    radius: number,
  };
};

export const setRay = (id: number, position: IPosition, velocity: IVelocity, radius: number) => ({
  payload: {
    id,
    position,
    velocity,
    radius,
  },
  type: SET_RAY,
});
