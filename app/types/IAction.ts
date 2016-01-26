/**
 * Redux standard action
 * @link https://github.com/kolodny/redux-standard-action
 */
interface IAction {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: string;
}

export default IAction;
