import { useState } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (feedback.good / countTotalFeedback()) * 100;
  };

  const feedbackHandler = (option) => {
    setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  return (
    <Section title={'Feedback for "Expresso" cafe'}>
      <FeedbackOptions options={Object.keys(feedback)} onChange={feedbackHandler} />
      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      >
        <Notification message="There is no feedback! 😞" />
      </Statistics>
    </Section>
  );
}
