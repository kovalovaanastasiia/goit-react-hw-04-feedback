import PropTypes from 'prop-types';

export const Notification = ({message}) => {
  return (
    <p className='notify'>{message}</p>
  )
}

Notification.propTypes = {
  message: PropTypes.string
}
