import { app } from 'hyperapp';

import actions from './actions';
import state from './state';
import view from './app';

const appArgs = [state, actions, view, document.getElementById('app')];

app(...appArgs);
