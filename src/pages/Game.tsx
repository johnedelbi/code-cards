import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { CodeCard } from '../components/CodeCard'
import { Hint } from '../components/Hint'
import { Result } from '../components/Result';

import question from '../question.json';
import React, { useState } from 'react';

import './game.css';

export const Game: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const answerClick = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < question.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const tryAgain = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <IonPage>
            <IonContent>
                {showScore ? (
                    <Result score={score} totalQuestions={question.length} onTryAgain={tryAgain} />
                ) : (
                    <>
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle className='question-title'>Question {`${currentQuestion + 1} / ${question.length} `}</IonTitle>
                            </IonToolbar>

                        </IonHeader>
                        <CodeCard code={question[currentQuestion].code}
                            question={question[currentQuestion].question} />
                        <div className='quiz-options'>
                            {question[currentQuestion].options.map((option, index) => (
                                <IonButton className='answer-btn' size="large" expand='block'
                                    key={index}
                                    onClick={() =>
                                        answerClick(index === question[currentQuestion].answer)
                                    }>
                                    {option}
                                </IonButton>
                            ))}
                        </div>
                        <Hint hint={question[currentQuestion].hint} />
                    </>
                )}
            </IonContent>
        </IonPage>
    );
};

