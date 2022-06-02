import React from 'react';
import { Key } from './key';

export function Keyboard() {
    const numbers: Array<string> = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        'delete',
    ];
    return (
        <>
            <div className="keyboard-container">
                <ol className="keyboard">
                    {numbers.map((item) => (
                        <li key={item}>
                            <Key item={item}></Key>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}
