import { IRootState } from '~store';
import { RouterState } from 'connected-react-router';

export const getRouterState = (state: IRootState): RouterState => state.router;