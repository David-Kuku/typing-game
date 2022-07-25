import { useState, useEffect } from 'react';
import styles from './timer.module.css';
import { getRemainingTimeUntilMsTimestamp } from '../../utils/getRemainingTime';
import { TRemainingTime } from '../../types/types';

const defaultRemainingTime = {
    seconds: '--',
    minutes: '--',
}

type TProps = {
    countdownTimestampMs: number;
    setTimeOver: (val: boolean) => void
}
const CountdownTimer = ({ countdownTimestampMs, setTimeOver }: TProps) => {
    const [remainingTime, setRemainingTime] = useState<TRemainingTime>(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        if (remainingTime === "FINISHED") {
            clearInterval(intervalId)
        }
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);

    // I used a second useeffect because setting setTimeOver in the first doesn't work, 
    // most likely because of the clearInterval function
    useEffect(() => {
        if (remainingTime === "FINISHED") {
            setTimeOver(true)
        }
    }, [remainingTime])

    const updateRemainingTime = (countdown: number) => {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className={styles.countdownTimer}>
            {
                remainingTime !== "FINISHED" ?

                    <div data-testid="time">
                        <span className={styles.twoNumbers}>{remainingTime.minutes}</span>
                        <span>:</span>
                        <span className={styles.twoNumbers}>{remainingTime.seconds}</span>
                    </div>
                    :
                    <>
                        <span className={styles.twoNumbers}>00</span>
                        <span>:</span>
                        <span className={styles.twoNumbers}>00</span>
                    </>
            }

        </div>
    );
}

export default CountdownTimer;