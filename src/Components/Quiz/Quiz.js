import React, { useRef, useState } from 'react';
import './Quiz.css';
import data from '../../assets/data';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const optionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const checkAns = (e, answer) => {
    if (!lock) {
      const isCorrect = question.answer === answer;

      if (isCorrect) {
        e.target.classList.add('correct');
        setScore(prevScore => prevScore + 1);
      } else {
        e.target.classList.add('incorrect');

        const correctOptionIndex = parseInt(question.answer.replace('option', '')) - 1;
        const correctRef = optionRefs[correctOptionIndex];
        if (correctRef && correctRef.current) {
          correctRef.current.classList.add('correct');
        }
      }
      setLock(true);
    }
  };

  const nextQuestion = () => {
    if (lock) {
      if (index < data.length - 1) {
        const nextIndex = index + 1;
        setIndex(nextIndex);
        setQuestion(data[nextIndex]);
        setLock(false);

        optionRefs.forEach(ref => {
          if (ref.current) {
            ref.current.classList.remove('correct', 'incorrect');
          }
        });
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setQuestion(data[0]);
    setLock(false);
    setScore(0);
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      {!quizCompleted ? (
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul>
            <li ref={optionRefs[0]} onClick={(e) => checkAns(e, 'option1')}>{question.option1}</li>
            <li ref={optionRefs[1]} onClick={(e) => checkAns(e, 'option2')}>{question.option2}</li>
            <li ref={optionRefs[2]} onClick={(e) => checkAns(e, 'option3')}>{question.option3}</li>
            <li ref={optionRefs[3]} onClick={(e) => checkAns(e, 'option4')}>{question.option4}</li>
          </ul>
          <button onClick={nextQuestion}>Next</button>
           <button className='reset-button' onClick={resetQuiz}>Reset Quiz</button>
          <div className="index">{index + 1} of {data.length} Questions</div>
        </>
      ) : (
        <div className="final-score">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} out of {data.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
