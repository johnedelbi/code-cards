import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './CodeCard.css';


export const CodeCard = (codeString) => {
    codeString = `
    const API_KEY = 'YOUR_API_KEY';
    const SECRET_KEY = 'YOUR_SECRET_KEY';
    
    const symbol = 'BTCUSDT'; // The trading pair symbol
    const side = 'BUY'; // The order side (BUY or SELL)
    const total = 15; // The total amount to spend in USDT
    const price = 50000; // The limit price for the order
    
    // Calculate the quantity of the asset to buy based on the total amount and the price
    const quantity = (total / price).toFixed(8);
    
    const timestamp = Date.now();
}); `;
    return (
        <div className='code-card'>
            <SyntaxHighlighter language="javascript" style={docco}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};