import Loadable from 'react-loadable';
import Loading from 'react-loading-skeleton';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading: Loading,
});

export default () => <LoadableComponent/>;
