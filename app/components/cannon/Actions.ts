import IStandardAction from '../../types/IAction';

export const UPDATE_ANGLE = 'UPDATE_ANGLE';
export const UPDATE_POWER = 'UPDATE_POWER';
export const INCREASE_POWER = 'INCREASE_POWER';

export interface IUpdateAngle extends IStandardAction {
  payload: number;
};

export interface IUpdatePower extends IStandardAction {
  payload: number;
};

export interface IIncreasePower extends IStandardAction { }

export const updateAngle = (angle: number) => ({
  payload: angle,
  type: UPDATE_ANGLE,
});

export const updatePower = (power: number) => ({
  payload: power,
  type: UPDATE_POWER,
});

export const increasePower = () => ({
  type: INCREASE_POWER,
});
