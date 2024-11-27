import React, { useState } from 'react'

export default function TimerChallange(props) {

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimerStarted(true);

        setTimeout(() => {
            setTimerExpired(true);
        }, props.targetTime * 1000)
    }

    return (
        <section className="challenge">
            <h2>{props.title}</h2>
            {timerExpired ? <p>You Lost!</p> : ""}
            <p className="challenge-time"> {props.targetTime} second{props.targetTime > 1 ? "s" : ""}</p>
            <p>
                <button onClick={handleStart}>{!timerStarted ? "Start Challange" : "Stop"}</button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? "Timer is running..." : "Timer inactive"}
            </p>
        </section>
    )
}
