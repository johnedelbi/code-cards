import { IonButton, IonContent, IonIcon } from '@ionic/react';
import { logoFigma, logoGithub } from 'ionicons/icons';

import './intro.css';

export const Intro: React.FC = () => {
  return (

    <IonContent className="ion-padding ion-text-center" fullscreen>
      <h1 className='logo-text'>Code Cards <br />
        Quiz game</h1>
      <IonButton routerLink='/game' size="large" className='start-btn'>Start</IonButton>

      <p>check the design on Figma<IonButton color="light" size="large" className='icon-btn' href='https://www.figma.com/file/YC05QHHI8B1amHqsrHrYO7/code-card-app?node-id=1%3A11&t=6AOQupLSKEg7qTRg-1' target='_blank'><IonIcon slot="icon-only" icon={logoFigma}></IonIcon></IonButton></p>

      <p>check source code on github <IonButton color="light" size="large" className='icon-btn' href='https://github.com/johnedelbi/code-cards' target='_blank'><IonIcon slot="icon-only" icon={logoGithub}></IonIcon></IonButton></p>
    </IonContent>
  );
};
