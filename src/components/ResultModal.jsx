import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef((props, ref) => {

    const dialog = useRef()

    const userLost = props.remainingTime <= 0
    const formattedRemainingTime = (props.remainingTime / 1000).toFixed(2);
    const score = Math.round(1 - props.remainingTime / (props.targetTime * 1000)) * 100

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className='result-modal' onClose={props.onReset}>
            {userLost && <h2>You LOST.</h2>}
            {!userLost && <h2>Your SCORE: {score}</h2>}
            <p>The target time was: <strong>{props.targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={props.onReset}>
                <button>CLOSE</button>
            </form>
        </dialog>
    );
});

export default ResultModal;
