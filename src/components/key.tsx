import React from 'react';
export function Key({ item }: { item: string }) {
    return (
        <>
            <button
                value={item}
                className={item === 'delete' ? 'key big' : 'key'}
            >
                {item}
            </button>
        </>
    );
}
