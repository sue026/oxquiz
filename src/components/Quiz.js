import React, { useState } from 'react';

const questionData = [
  { question: '달팽이도 이빨이 있다', answer: 'O' },
  { question: '북두칠성은 우리나라에서 볼 때 시계 방향으로 회전한다', answer: 'X' },
  { question: '조선의 마지막 왕은 고종이다', answer: 'X' },
  { question: '물고기도 귀가 있다.', answer: 'O' },
  { question: '조선시대에도 예비군이 있었다.', answer: 'O' },

];

const Quiz = () => {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questionData[question].answer) {
      setScore(score + 1);
    }

    const nextQuestion = question + 1;
    if (nextQuestion < questionData.length) {
      setQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className='quiz_wrap'>
      {showScore ? (
        <div className='score'>
          <p>맞춘 문항 수 :  {score} </p>
          <p>총 문항 수 : {questionData.length}</p>
          <button onClick={restartQuiz}>다시하기</button>
          <button>결과보기</button>
        </div>
      ) : (
        <>
          <div className='question'>
              <span className='q_count'> {question + 1}.</span>
            <div className='q_text'>{questionData[question].question}</div>
          </div>
          <div className='answer'>
            <button onClick={() => handleAnswer('O')}>O</button>
            <button onClick={() => handleAnswer('X')}>X</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
