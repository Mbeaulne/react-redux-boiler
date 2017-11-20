import asyncComponent from '../../components/asyncComponent';

const Component = asyncComponent(() => import('./containers'));

export {
    Component
}