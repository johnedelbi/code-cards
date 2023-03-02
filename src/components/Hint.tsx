import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './hint.css';

export const Hint: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <IonContent>
            <IonButton expand="block" size="large" onClick={() => setIsOpen(true)}>
                need help ! click to get a hint
            </IonButton>
            <IonModal isOpen={isOpen}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Hint!</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <p>
                        the hint details will be here
                    </p>
                </IonContent>
            </IonModal>
        </IonContent>

    );
};

