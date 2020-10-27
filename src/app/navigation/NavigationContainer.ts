
import { connect } from 'react-redux';
import { IRootState } from '~store';
import { getRouterPath } from '~common/functions/router/getRouterPath';


import { Navigation } from '.';
import { INavigationProps } from './INavigationProps';
import { ActiveMenu } from './ActiveMenu';

// Store state to props mapper
const mapStateToProps = (state: IRootState): INavigationProps => {
    const props: INavigationProps = {
        activeMenu: ActiveMenu.Dashboard
    };

    switch (getRouterPath(state)) {
        case '/connections':
            props.activeMenu = ActiveMenu.Connections;
            break;
        case '/trade-signals':
            props.activeMenu = ActiveMenu.TradeSignals;
            break;
        case '/':
        default:
            props.activeMenu = ActiveMenu.Dashboard;
    }
    
    return props;
};

// Container
export const NavigationContainer = connect(mapStateToProps)(Navigation);