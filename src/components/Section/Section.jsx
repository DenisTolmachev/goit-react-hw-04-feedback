import PropTypes from 'prop-types';
import { SectionStyle } from './Section.styled';

export const Section = props => {
  const { title, children } = props;
  return (
    <SectionStyle>
      <h2>{title}</h2>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
