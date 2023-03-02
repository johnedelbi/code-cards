import { IonButton, IonContent, IonIcon } from '@ionic/react';
import { logoFigma, logoGithub } from 'ionicons/icons';

import './intro.css';

export const Intro: React.FC = () => {
  return (

    <IonContent className="ion-padding ion-text-center" fullscreen>
      <h1 className='logo-text'>Code Cards <br />
        Quiz game</h1>
      <IonButton routerLink='/game' expand="block" size="large" className='intro-btn'>Start</IonButton>

      <IonButton expand="block" size="large" className='intro-btn' href='https://www.figma.com/file/YC05QHHI8B1amHqsrHrYO7/code-card-app?node-id=1%3A11&t=6AOQupLSKEg7qTRg-1'><IonIcon color="light" slot="end" icon={logoFigma}></IonIcon>check the design on Figma</IonButton>

      <IonButton expand="block" size="large" className='intro-btn' href='https://github.com/johnedelbi/code-cards'><IonIcon color="light" slot="end" icon={logoGithub}></IonIcon>check source code on github</IonButton>
    </IonContent>
  );
};
