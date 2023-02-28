import { IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';
import './intro.css';

export const Intro: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel>
            <h1>intro</h1>
            <p>intro</p>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

