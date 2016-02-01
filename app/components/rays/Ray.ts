import * as Rx from '../../../node_modules/rxjs/Rx';
import { IVelocity, IPosition, IRay } from './IState';

export default class Ray {

  /**
   * Game engine frames per second
   */
  private fps = 30;

  /**
   * A frame (in miliseconds)
   */
  private frameTime = Math.round(this.fps / 1000);

  /**
   * Engine clock
   */
  private time = Rx.Observable.interval(this.frameTime);

  private _id: number;

  private _position: Rx.Observable<IPosition>;

  private _velocity: Rx.Observable<IVelocity>;

  public constructor(power: number, angle: number, initialPosition: IPosition) {
    this._velocity = this.velocity(power, angle);
    this._position = this.position(this._velocity, initialPosition);
    this._id = this.generateId();
  }

  get ray() {
    return {
      id: this._id,
      position: this._position,
      velocity: this._velocity
    };
  }

  /**
   * Create a new ray velocity vector (w/ constant velocity through time)
   */
  public velocity(power: number, angle: number): Rx.Observable<IVelocity> {
    return this.time.map(time => ({
      x: power * Math.cos(angle * 2 * Math.PI / 360),
      y: power * Math.sin(angle * 2 * Math.PI / 360),
    }));
  };

  /**
   * Integrates a velocity field into positions
   */
  public position(velocities: Rx.Observable<IVelocity>, initialPosition: IPosition): Rx.Observable<IPosition> {
    return velocities.bufferCount(2, 0).scan((position: IPosition, vPair) => ({
      x: vPair[0].x * this.frameTime + position.x,
      y: vPair[0].y * this.frameTime + position.y,
    }), initialPosition);
  }

  private powerToRadius(power: number) {
    return power * 10;
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

};
