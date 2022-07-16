import PropTypes from 'prop-types';
import { Button  } from './FeedbackOptions.styled'

export const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <div>
      {options.map(item => (
        <Button type="button" key={item} value={item} onClick={onLeaveFeedback}>
          {item}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
