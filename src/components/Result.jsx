import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent } from '@ionic/react';

import './Result.css'

export const Result = (props) => {

    const handleTryAgainClick = () => {
        props.onresetScore();
    };

    return (
        <IonContent className="ion-padding ion-text-center " fullscreen>
            <h1 className='title-text'>you result </h1>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle className='title-text total-color'>Total Score</IonCardTitle>
                </IonCardHeader>

                <IonCardContent className='title-text score-color'>
                    {props.score}/{props.totalQuestions}
                </IonCardContent>
            </IonCard>
            <IonButton onClick={handleTryAgainClick} size="large" className='start-btn'>Try Again</IonButton>


        </IonContent>
    );
};
