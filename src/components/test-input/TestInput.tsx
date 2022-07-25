import { useEffect, useState } from 'react'
import styles from '../paragraphs-container/testParagraph.module.css'
import { useDebounce } from '../../hooks/useDebounce'
import { calculateResult } from '../../utils/calculateResult'
import { useAppContext } from '../../context/context'


type TProps = {
    isTimeOver: boolean;
}
const TestInput = ({ isTimeOver }: TProps) => {

    const { wordList, setUserScore } = useAppContext()
    const [userText, setUserText] = useState('')
    const { debouncedSave } = useDebounce()

    const handleChange = (val: string) => {
        debouncedSave({ setFn: setUserText, value: val })
    }

    useEffect(() => {
        if (isTimeOver) {
            calculateResult({ setUserScore, userText, testWords: wordList })
        }
    }, [isTimeOver])

    return (
        <>
            <h4>Start Typing here...</h4>
            <textarea
                className={styles.textArea}
                onChange={(e) => handleChange(e.target.value)}
            />
        </>
    )
}

export default TestInput