type ICoordinate = {
  x: number,
  y: number,
};

export type IPosition = ICoordinate;

export type IVelocity = ICoordinate;

type Ray = {
  id: number,
  position: IPosition[],
  velocity: IVelocity[],
};

type Rays = Ray[];

export default Rays;
