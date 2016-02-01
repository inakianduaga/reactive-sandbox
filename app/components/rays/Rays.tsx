import * as React from 'react';
import * as Rx from '../../../node_modules/rxjs/Rx';
import * as RayActions from './Actions';
import IRays from './IState';

type IRaysProps = {
  rays: IRays
};

class Rays extends React.Component<IRaysProps, any> {

  public componentDidMount() {
  }

  public render() {

    return (
      <div ref='board' style={{
        width: '800px',
        height: '800px',
        border: '1px solid #eee',
        position: 'relative',
      }}>
          { this.props.rays.map(ray =>
            <div style={{
              position: 'absolute',
              backgroundColor: 'red',
              borderRadius: '500px',
              width: ray.radius / 2,
              height: ray.radius / 2,
              left: ray.position.x,
              top: ray.position.y,
            }} />

          )}
      </div>
    );
  }

};

export default Rays;
