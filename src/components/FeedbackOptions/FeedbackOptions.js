import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const { fdbkBtn } = styles;

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button
        key={option}
        type="button"
        className={fdbkBtn}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
