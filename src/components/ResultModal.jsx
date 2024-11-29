import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef((props, ref) => {

    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className='result-modal'>
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
