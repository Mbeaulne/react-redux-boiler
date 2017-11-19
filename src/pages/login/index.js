import asyncComponent from '../../components/asyncComponent';
import reducer from './reducer';

const Component = asyncComponent(() => import('./containers'));

export {
    reducer,
    Component
}