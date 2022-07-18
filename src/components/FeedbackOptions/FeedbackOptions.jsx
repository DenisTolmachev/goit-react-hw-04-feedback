import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = props => {
  const { handleClickGood, handleClickNeutral, handleClickBad } = props;
  return (
    <div>
      <Button type="button" onClick={handleClickGood}>
        Good
      </Button>
      <Button type="button" onClick={handleClickNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={handleClickBad}>
        Bad
      </Button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleClickGood: PropTypes.func.isRequired,
  handleClickNeutral: PropTypes.func.isRequired,
  handleClickBad: PropTypes.func.isRequired,
};
