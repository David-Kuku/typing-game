import React, { useState } from 'react'
import Button from '../common/button/Button'
import styles from './timeSelection.module.css'
type TProps = {
    setTestDuration: (val: number) => void
}

const TimeSelection = ({ setTestDuration }: TProps) => {
    const [selected, setSelected] = useState('')
    const [customTime, setCustomTime] = useState(0)

    const startTest = () => {
        selected !== 'Custom' ?
            setTestDuration(Number(selected)) :
            setTestDuration(Number(customTime))
    }
    return (
        <div className={styles.container}>

            <div className={styles.selectTime}>
                <b>Select test duration (in Minutes) : </b>
                <select onChange={(e) => setSelected(e.target.value)} className={styles.select}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="Custom">Custom</option>
                </select>
            </div>

            {
                selected === "Custom" && (
                    <div className={styles.customTime}>
                        <input
                            type='text'
                            placeholder='Enter your preferred duration'
                            onChange={(e) => setCustomTime(Number(e.target.value))}
                        />

                    </div>
                )
            }

            {
                (selected && selected !== 'Custom') || customTime ?
                    <Button onClick={startTest} value='Commence Test' /> :
                    <></>
            }

        </div>
    )
}

export default TimeSelection