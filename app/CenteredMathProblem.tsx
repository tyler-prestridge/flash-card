"use client";

import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';

const CenteredMathProblem: React.FC = () => {
  const [singleDigit, setSingleDigit] = useState<number>(0);
  const [doubleDigit, setDoubleDigit] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctGuesses, setCorrectGuesses] = useState<number>(0);
  const [incorrectGuesses, setIncorrectGuesses] = useState<number>(0);

  const generateProblem = () => {
    const single = Math.floor(Math.random() * 10);
    const double = Math.floor(Math.random() * 20) + 10;

    setSingleDigit(single);
    setDoubleDigit(double);

    const correctAnswer = single + double;

    let incorrect1 = correctAnswer;
    let incorrect2 = correctAnswer;

    while (incorrect1 === correctAnswer) {
      incorrect1 = Math.floor(Math.random() * 20);
    }

    while (incorrect2 === correctAnswer || incorrect2 === incorrect1) {
      incorrect2 = Math.floor(Math.random() * 20);
    }

    const shuffledAnswers = [correctAnswer, incorrect1, incorrect2].sort(() => Math.random() - 0.5);
    setAnswers(shuffledAnswers);
    setIsCorrect(null);
  };

  useEffect(() => {
    generateProblem();
  }, []);

  const triggerConfetti = useCallback(() => {
    const duration = 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  const handleButtonClick = (answer: number) => {
    if (answer === singleDigit + doubleDigit) {
      setIsCorrect(true);
      setCorrectGuesses((prev) => {
        const updatedCorrectGuesses = prev + 1;
        if (updatedCorrectGuesses % 10 == 0)  {
          triggerConfetti();
          setTimeout(() => {
          },2000);
        }
        return updatedCorrectGuesses;
      });
    } else {
      setIsCorrect(false);
      setIncorrectGuesses((prev) => prev + 1);
    }
    setTimeout(generateProblem, 700); // Small delay to show feedback
  };

  return (
      <div style={styles.container}>
        <div style={styles.counters}>
          <div>Correct Guesses: {correctGuesses}</div>
          <div>Incorrect Guesses: {incorrectGuesses}</div>
        </div>
        <div style={styles.problem}>
          {singleDigit} + {doubleDigit} = ?
        </div>
        <div style={styles.answers}>
          {answers.map((answer) => (
              <button key={answer} style={styles.button} onClick={() => handleButtonClick(answer)}>
                {answer}
              </button>
          ))}
        </div>
        {isCorrect !== null && (
            <div style={isCorrect ? styles.correct : styles.incorrect}>
              {isCorrect ? 'Correct!' : 'Almost! Keep trying.'}
            </div>
        )}
      </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center' as const,
  },
  counters: {
    position: 'absolute' as const,
    top: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 20px',
    fontSize: '18px',
    color: '#fff',
  },
  problem: {
    fontSize: '48px',
    fontWeight: 'bold' as const,
    marginBottom: '20px',
  },
  answers: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    flex: 1,
    padding: '10px 20px',
    fontSize: '30px',
    cursor: 'pointer',
    border: '2px solid #fff',   // Add this line for border
    borderRadius: '5px',  // Optional: Add for rounded corners
    backgroundColor: '#333', // Optional: Set background color
    margin: '0 5px', // Add margin between buttons

  },
  correct: {
    color: 'green',
    fontSize: '24px',
    marginTop: '20px',
  },
  incorrect: {
    color: 'red',
    fontSize: '24px',
    marginTop: '20px',
  },
};

export default CenteredMathProblem;