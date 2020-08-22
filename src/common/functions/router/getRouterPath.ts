import { History } from 'history';

import { IRootState } from '~store';

import { getRouterState } from './getRouterState';

export const getRouterPath = (state: IRootState): History.Pathname => getRouterState(state).location.pathname;