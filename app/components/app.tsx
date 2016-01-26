import * as React from 'react';
import * as ReactDOM from 'react-dom';
let { connect } = require('react-redux');
import * as Rx from '../../node_modules/rxjs/Rx';
import IReduxConnectedComponent from '../types/IReduxConnectedComponent';
import IGlobalState from '../IGlobalState';

interface IAppProps extends IReduxConnectedComponent, IGlobalState {
  dispatch: Function;
};

function select(state: IGlobalState): IGlobalState {
  return state;
};

const App = (props: IAppProps) => {

  // public componentDidMount() {
  //   const angleControl = Rx.Observable.fromEvent((this.refs as any).angleControl, 'value');
  // }

  const { dispatch } = props;

  return (
    <div>
      <div ref='cannon'>CANNON HERE</div>
      <input type='range' ref='angleControl' id='angleControl' min='0' value='0' max='360' step='2' />
    </div>
  );
};

export default connect(select)(App);
