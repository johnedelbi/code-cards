import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

import './Hint.css';

export const Hint = (hintString) => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <IonContent>

            <IonButton className='hint-btn' expand="block" size="large" onClick={() => setIsOpen(true)}>
                need help ! get a hint
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
                        {hintString.hint}
                    </p>
                </IonContent>
            </IonModal>
        </IonContent>
    );
};

