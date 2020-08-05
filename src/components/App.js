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
  // the same, but shortest
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  // countPositiveFeedbackPercentage = () => {
  //   const positiveFeedback = this.state.good;
  //   const total = this.countTotalFeedback();
  //   return total === 0 ? 0 : Math.floor((positiveFeedback / total) * 100);
  // };
  //OR shortest variant
  countPositiveFeedbackPercentage = () =>
    Math.floor((this.state.good / this.countTotalFeedback()) * 100);

  feedbackCounter = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  // feedbackAndPercentageCounter = value => {
  //   this.feedbackCounter(value);
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    // const options = Object.keys(this.state); - can use it for destructuring

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.feedbackCounter}
            //OR try this (if forget what we count :))
            // onLeaveFeedback={this.feedbackAndPercentageCounter}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <NotificationMsg msg={'No feedback given'} />
          )}
        </Section>
      </>
    );
  }
}

export default App;
