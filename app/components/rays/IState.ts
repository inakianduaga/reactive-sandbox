import * as Rx from '../../../node_modules/rxjs/Rx';

export type ICoordinate = {
  x: number,
  y: number,
};

export type IPosition = ICoordinate;

export type IVelocity = ICoordinate;

export type IRay = {
  id: number,
  velocity: Rx.Observable<IVelocity>,
  position: Rx.Observable<IPosition>,
};


// export type IRayVelocityPoint = {
//   id: number,
//   velocity: IVelocity,
// };

// type IPositionPoint = {
//   id: number,
//   position: IPosition,
// };

export type IRayState = {
  id: number,
  radius: number,
  position: IPosition,
  velocity: IVelocity,
};

type IState = IRayState[];

export default IState;
