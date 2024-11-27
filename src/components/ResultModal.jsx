import React from 'react'

export default function ResultModal(props) {
    return (
        <dialog className='result-modal'>
            <h2>YOU {props.result}</h2>
            <p>The target time was: <strong>{props.targetTime} seconds.</strong> </p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>CLOSE</button>
            </form>
        </dialog>
    )
}
