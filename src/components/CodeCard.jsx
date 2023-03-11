import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './CodeCard.css';

export const CodeCard = (codeString) => {
    return (
        <IonCard>
            <IonCardContent className='code-card'>
                <SyntaxHighlighter language="javascript" style={dark}>
                    {codeString.code}
                </SyntaxHighlighter>
            </IonCardContent>
            <IonCardHeader>
                <IonCardTitle>{codeString.question}</IonCardTitle>
            </IonCardHeader>
        </IonCard >
    );
};