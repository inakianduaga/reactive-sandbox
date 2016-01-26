import ICanonState from './components/cannon/IState';
import IRayState from './components/rays/IState';

interface IGlobalState {
  canon: ICanonState;
  rays: IRayState;
};

export default IGlobalState;
