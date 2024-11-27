import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

export default function TimerChallange(props) {

    const timer = useRef();
    const dialog = useRef()

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimerStarted(true);

        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal();
        }, props.targetTime * 1000)
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={props.targetTime} result="lost" />
            <section className="challenge">
                <h2>{props.title}</h2>
                <p className="challenge-time">
                    {props.targetTime} second{props.targetTime > 1 ? "s" : ""}
                </p>

                <p>
                    <button onClick={!timerStarted ? handleStart : handleStop}>{!timerStarted ? "Start Challange" : "Stop"}</button>
                </p>

                <p className={timerStarted ? "active" : undefined}>
                    {timerStarted ? "Timer is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    )
}
