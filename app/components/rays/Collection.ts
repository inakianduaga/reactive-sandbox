import Ray from './Ray';
import * as Rx from '../../../node_modules/rxjs/Rx';
import { IVelocity, IPosition, IRay, IRayState } from './IState';
import * as RayActions from './Actions';

class Collection {

  private dispatcher: Function;

  private rays: IRay[] = [];

  public constructor() {
  }

  public setDispatcher(dispatcher: Function) {
    this.dispatcher = dispatcher;
  }

  public add(ray: IRay) {
    this.rays.push(ray);

    // todo: add collision detection
    this.draw(ray);
  }

  public removeById(id: number) {
    this.rays.splice(this.rays.findIndex(predicate => predicate.id === id), 1);
  }

  private draw(ray: IRay) {
    Rx.Observable.zip(ray.position, ray.velocity, (position: IPosition, velocity: IVelocity) => ({
      id: ray.id,
      position,
      velocity,
      radius: Math.sqrt(Math.pow(velocity.x, 2) + Math.pow(velocity.y, 2))
    }))
      .subscribe((rayState: IRayState) =>
        this.dispatcher(RayActions.setRay(rayState.id, rayState.position, rayState.velocity, rayState.radius )));
  }

}

const collection = new Collection();

export default collection; // singleton
