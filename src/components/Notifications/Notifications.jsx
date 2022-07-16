import PropTypes from 'prop-types';
import { Notification } from './Notifications.styled';

export const Notifications = props => {
    const { message } = props;
    return (
        <Notification>
        <p>{message}</p>
        </Notification>
    );
};

Notifications.propTypes = {
    message: PropTypes.string.isRequired,
}