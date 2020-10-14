import { connect } from 'react-redux';
import { IRootState } from '~store';

import { INotificationAreaProps, NotificationArea } from '.';

// Store state to props mapper
const mapStateToProps = (state: IRootState): INotificationAreaProps => {
    return {
        notifications: state.notifications
    };
};

// Container
export const NotificationAreaContainer = connect(mapStateToProps)(NotificationArea);