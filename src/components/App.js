import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import NotificationMsg from './NotificationMsg';
import PropTypes from 'prop-types';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  //   countTotalFeedback = () => {
  //     return this.state.good + this.state.neutral + this.state.bad;
  //   };
  // OR
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const positive = this.state.good;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.floor((positive / total) * 100);
  };

  feedbackCounter = value => {
    // const value = event.target.name;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  percentageCounter = value => {
    this.feedbackCounter(value);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePersentage = this.countPositiveFeedbackPercentage();
    // const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.percentageCounter}
          />
        </Section>
        {total > 0 ? (
          <Section title="Statistics:">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePersentage={positivePersentage}
            />
          </Section>
        ) : (
          <NotificationMsg msg={'No feedback given'} />
        )}
      </>
    );
  }
}

export default App;
