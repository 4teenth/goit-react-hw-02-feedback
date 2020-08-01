import React from 'react';
import StatisticItem from './StatisticItem';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => (
  <>
    <ul>
      <StatisticItem label="Good" value={good} />
      <StatisticItem label="Neutral" value={neutral} />
      <StatisticItem label="Bad" value={bad} />
      <StatisticItem label="Total" value={total} />
      <StatisticItem
        label="Positive feedback"
        value={`${positivePersentage}%`}
      />
    </ul>
  </>
);

Statistics.defaultProps = {
  total: 0,
  positivePersentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePersentage: PropTypes.number.isRequired,
};

export default Statistics;
