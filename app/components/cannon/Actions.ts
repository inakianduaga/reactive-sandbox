import IStandardAction from '../../types/IAction';

export const UPDATE_ANGLE = 'UPDATE_ANGLE';

export interface IUpdateAngle extends IStandardAction {
  payload: number;
};

export const updateAngle = (angle: number) => ({
  payload: angle,
  type: UPDATE_ANGLE,
});
