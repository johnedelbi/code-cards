import { IonButton, IonContent, IonPage } from '@ionic/react';
import { Hint } from '../components/Hint'
import './game.css';

export const Game: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding" fullscreen>
                <IonButton className='answer-btn' size="large" expand='block'>option 1</IonButton>
                <IonButton className='answer-btn' size="large" expand='block'>option 2</IonButton>
                <IonButton className='answer-btn' size="large" expand='block'>option 3</IonButton>
                <IonButton className='answer-btn' size="large" expand='block'>option 4</IonButton>
                <Hint />
            </IonContent>
        </IonPage>
    );
};

