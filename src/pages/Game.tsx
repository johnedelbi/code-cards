import { IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';
import { Hint } from '../components/Hint'
import './game.css';

export const Game: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonItem>
                    <IonLabel>
                        <h1>Game</h1>
                        <p>Game</p>

                    </IonLabel>
                </IonItem>
                <Hint />
            </IonContent>
        </IonPage>
    );
};

