import { IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';
import './result.css';

export const Result: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonItem>
                    <IonLabel>
                        <h1>Result</h1>
                        <p>Result</p>
                    </IonLabel>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

