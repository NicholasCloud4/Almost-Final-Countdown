import React, { forwardRef } from 'react';

const ResultModal = forwardRef((props, ref) => {
    return (
        <dialog ref={ref} className='result-modal'>
            <h2>YOU {props.result}</h2>
            <p>The target time was: <strong>{props.targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>CLOSE</button>
            </form>
        </dialog>
    );
});

export default ResultModal;
