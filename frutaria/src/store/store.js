import { createStore } from 'redux';
import { reducers } from '../reducers';


const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTESION__ && window.__REDUX_DEVTOOLS_EXTESION__()
    );

export {store};