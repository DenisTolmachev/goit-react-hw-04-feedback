import { useState, useEffect } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notifications } from 'components/Notifications/Notifications';
import { Container } from 'components/common/Container.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  //Чи можливо цю задачу вирішити за допомогою switch case?
  //Якщо можливо, то в мене знов щось не виходить)))
  
  // const handleLeaveFeedback = (value) => {
  //   switch (value) {
  //     case 'good':
  //       setGood(good + 1);
  //       break;
  //     case 'neutral':
  //       setNeutral(neutral + 1);
  //       break;
  //     case 'bad':
  //       setBad(bad + 1);
  //       break;
  //     default:
  //       break;
  //   }
  // }
  // const options = ['good', 'neutral', 'bad'];

  const handleClickGood = () => {
    setGood(prevState => prevState + 1);
  };
  const handleClickNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };
  const handleClickBad = () => {
    setBad(prevState => prevState + 1);
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPercentage(Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={options}
          // handleLeaveFeedback={handleLeaveFeedback}
          handleClickGood={handleClickGood}
          handleClickNeutral={handleClickNeutral}
          handleClickBad={handleClickBad}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        ) : (
          <Notifications message="There is no feedback"></Notifications>
        )}
      </Section>
    </Container>
  );
};
