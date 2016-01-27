import * as React from 'react';
import * as ReactDOM from 'react-dom';
let { connect } = require('react-redux');
import IReduxConnectedComponent from '../types/IReduxConnectedComponent';
import IGlobalState from '../IGlobalState';
import Cannon from './cannon/Cannon';

interface IAppProps extends IReduxConnectedComponent, IGlobalState {
  dispatch: Function;
};

function select(state: IGlobalState): IGlobalState {
  return state;
};

class App extends React.Component<IAppProps, any> {

  public render() {
    const { dispatch } = this.props;

    return (
      <div>
        <Cannon angle={ this.props.canon.angle } power={ this.props.canon.power } dispatch={ this.props.dispatch } />
      </div>
    );
  }

};

export default connect(select)(App);
