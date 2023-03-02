import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './CodeCard.css';


export const CodeCard = (codeString) => {
    codeString = `
        (num) => num + 1
            (num) => num + 1
                (num) => num + 1
                    (num) => num + 1
                        (num) => num + 1
                            (num) => num + 1`;
    return (
        <div className='code-card'>
            <SyntaxHighlighter language="javascript" style={docco}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};