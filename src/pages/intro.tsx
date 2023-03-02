import { IonButton, IonContent } from '@ionic/react';
import './intro.css';

export const Intro: React.FC = () => {
  return (

    <IonContent className="ion-padding" fullscreen>

      <div className="ion-text-center">
        <h1 className='logo-text'>Code Cards <br />
          Quiz game</h1>
      </div>
      <IonButton routerLink='/game' expand="block" size="large" className='start-btn'>Start</IonButton>
    </IonContent>
  );
};

