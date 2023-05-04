import { useState } from 'react';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { Container } from './App.styled';
import { calculatePercentage } from 'utils/calculatePercentage';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const statistics = { good, neutral, bad };

  const handleIncrement = type => {
    switch (type) {
      case 'good':
        setGood(prevS => prevS + 1);
        break;
      case 'neutral':
        setNeutral(prevS => prevS + 1);
        break;
      case 'bad':
        setBad(prevS => prevS + 1);
        break;
      default:
        console.warn('No such review');
    }
  };

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(statistics)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title={'Statistics'}>
        {total !== 0 ? (
          <Statistics
            statistics={statistics}
            total={total}
            positivePercentage={calculatePercentage(good, total)}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Container>
  );
};
