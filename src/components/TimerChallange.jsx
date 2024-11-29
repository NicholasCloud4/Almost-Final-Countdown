import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

export default function TimerChallange(props) {

    const timer = useRef();
    const dialog = useRef()

    const [timeRemaining, setTimeRemaing] = useState(props.targetTime * 1000)

    const timerIsActive = timeRemaining > 0 && timeRemaining < props.targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }

    function handleReset() {
        setTimeRemaing(props.targetTime * 1000)
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaing((prevTimeRemaing) => prevTimeRemaing - 10);
        }, 10)
    }

    function handleStop() {
        dialog.current.open()
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={props.targetTime} remainingTime={timeRemaining} onReset={handleReset} />
            <section className="challenge">
                <h2>{props.title}</h2>
                <p className="challenge-time">
                    {props.targetTime} second{props.targetTime > 1 ? "s" : ""}
                </p>

                <p>
                    <button onClick={!timerIsActive ? handleStart : handleStop}>{!timerIsActive ? "Start Challange" : "Stop"}</button>
                </p>

                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Timer is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    )
}
