import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonPage } from '@ionic/react';

import { CodeCard } from '../components/CodeCard'
import { Hint } from '../components/Hint'

import './game.css';

export const Game: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding" fullscreen>
                <IonCard>
                    <CodeCard />
                    <IonCardHeader>
                        <IonCardTitle>question 1</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Here's a small text description for the card content. Nothing more, nothing less.
                    </IonCardContent>
                </IonCard>
                <IonButton className='answer-btn' size="large" expand='block'>option 1</IonButton>
                <IonButton className='answer-btn' size="large" expand='block'>option 2</IonButton>
                <IonButton className='answer-btn' size="large" expand='block'>option 3</IonButton>
                <IonButton className='answer-btn' size="large" expand='block'>option 4</IonButton>
                <Hint />
            </IonContent>
        </IonPage>
    );
};

