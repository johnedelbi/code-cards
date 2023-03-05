import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent } from '@ionic/react';

import './Result.css'

export const Result: React.FC = () => {
    return (
        <IonContent className="ion-padding ion-text-center " fullscreen>
            <h1 className='title-text'>you result </h1>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle className='title-text total-color'>Total Score</IonCardTitle>
                </IonCardHeader>

                <IonCardContent className='title-text score-color'>
                    24/30
                </IonCardContent>
            </IonCard>
            <IonButton routerLink='/game' size="large" className='start-btn'>try again</IonButton>


        </IonContent>
    );
};
