import { useEffect, useState } from 'react'
import TextParagraph from './TextParagraph'
import styles from './testParagraph.module.css'
import Modal from '../common/modal/modal'
import { useAppContext } from '../../context/context'


const TextContainer = () => {
    const {
        wordList,
        setWordList,
        setTestDuration,
        testDuration,
        timeElapsed,
        userScore,
        setTimeElapsed,
        userOption,
        setUserOption } = useAppContext()

    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        timeElapsed && setOpenModal(true)
    }, [timeElapsed])

    return (
        <>
            <div className={styles.mainContainer}>
                <>
                    <TextParagraph
                        option={userOption}
                        wordList={wordList}
                        setWordList={setWordList}
                        setOption={setUserOption}
                        setTestDuration={setTestDuration}
                        testDuration={testDuration}
                    />
                </>
            </div>
            {/* MODAL */}
            {
                openModal &&
                <Modal
                    setOpenModal={setOpenModal}
                    setOption={setUserOption}
                    setTestDuration={setTestDuration}
                    setWordList={setWordList}
                    userScore={userScore}
                    setTimeElapsed={setTimeElapsed}
                />

            }
        </>
    )
}

export default TextContainer