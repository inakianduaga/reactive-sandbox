import * as React from 'react';
import * as Rx from '../../../node_modules/rxjs/Rx';
import * as CannonActions from './Actions';

type ICannonProps = {
  dispatch: Function;
  angle: number,
  power: number,
};

type IPowerProps = {
  power: number,
};

const Power: any = ({ power }: IPowerProps) =>
  <div style={{
    width: '300px',
    height: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  }}>
    <div style={{
      width: `${power * 10}%`,
      height: '20px',
      backgroundColor: 'wheat',
      transition: 'all 0.1s',
    }}>
    </div>
  </div>;

class Cannon extends React.Component<ICannonProps, any> {

  private updateAngle = (e: any) => {
    this.props.dispatch(CannonActions.updateAngle(e.target.value));
  }

  public componentDidMount() {

    // Angle control
    const angleControl = Rx.Observable.fromEvent((this.refs as any).angleControl, 'change');
    const angleControlChange = angleControl.subscribe((event: React.FormEvent) => console.log(event));

    // control cannon power
    const powerLoadingTimeSecs = 1;
    const cannonPowerStart = Rx.Observable.fromEvent((this.refs as any).cannon, 'mousedown');
    const cannonPowerEnd = Rx.Observable.fromEvent((this.refs as any).cannon, 'mouseup');
    const cannonPowerTimer = Rx.Observable.interval(powerLoadingTimeSecs * 1000 / 10);
    const cannonPowerLoading = cannonPowerTimer.skipUntil(cannonPowerStart).takeUntil(cannonPowerEnd);

    // Update cannon power state during loading phase
    cannonPowerLoading.subscribe((time: number) => this.props.power < 10 && this.props.dispatch(CannonActions.increasePower()));

    // Emit a ray. This needs to create a ray with a speed proportional to the power and a velocity given by the angle provided
    cannonPowerEnd.subscribe(mouseEvent => console.log(this.props.power)); // TODO
  }

  public render() {
    const { dispatch } = this.props;

    return (
      <div>
        <div ref='cannon'>
          <span ref='cannon' style={{
            fontSize: '5em',
            display: 'inline-block',
            transform: `rotate(-${ this.props.angle }deg)`,
            color: `rgb(${this.props.power * 255 / 10}, 0, 0)`
            }}
            >✈</span>
        </div>
        <input
          type='range'
          ref='angleControl'
          id='angleControl'
          min='0'
          value={`${this.props.angle}`}
          onChange={ this.updateAngle }
          max='360'
          step='1' />

        <Power power={ this.props.power} />
      </div>
    );
  }

};

export default Cannon;
