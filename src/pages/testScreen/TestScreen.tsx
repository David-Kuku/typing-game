import { Timer, TextContainer, TestInput } from '../../components'
import { useAppContext } from '../../context/context'
import styles from './testScreen.module.css'

function TestScreen() {
    const { setTimeElapsed, timeElapsed, testDuration } = useAppContext()

    const testDurationInTimeStamp = testDuration * 60 * 1000
    return (
        <>
        <h3 className={styles.title}>The Typing Game</h3>
            <div className={styles.container}>
                {testDuration ?
                    (
                        <div className={styles.timer}>
                            <Timer
                                countdownTimestampMs={Date.now() + testDurationInTimeStamp}
                                setTimeOver={setTimeElapsed}
                            />
                        </div>
                    ) : <></>
                }
                <div>
                    <TextContainer />
                    {testDuration ?
                        (<TestInput
                            isTimeOver={timeElapsed}
                        />
                        ) : <></>
                    }
                </div>

            </div>
        </>
    )
}

export default TestScreen