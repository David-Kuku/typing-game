import Button from '../common/button/Button'
import styles from './testParagraph.module.css'
import { WebsiteParagraph } from '../../utils/mock'
import TimeSelection from '../time-selection/TimeSelection'
import { useDebounce } from '../../hooks/useDebounce'
import { TOption } from '../../types/types';
import { Link } from 'react-router-dom'

type TProps = {
    option: TOption;
    wordList: string;
    setWordList: (val: string) => void
    setOption: (val: TOption) => void
    setTestDuration: (val: number) => void
    testDuration: number
}

const TextParagraph = ({
    option,
    setWordList,
    wordList,
    setOption,
    setTestDuration,
    testDuration
}: TProps) => {

    const { debouncedSave } = useDebounce()

    const handleChange = (val: string) => {
        debouncedSave({ setFn: setWordList, value: val })
    }

    return (
        <>
            <div className={styles.backButton}>
                <Link to = '/'>
                    <Button
                        value='Back'
                        variant='Transparent'
                        onClick={() => { setOption(''); setWordList(WebsiteParagraph); setTestDuration(0) }}
                    />
                </Link>
            </div>
            <h3>Test Paragraph</h3>

            {
                option === 'USER' ? (
                    <>
                        <textarea
                            placeholder='Copy and Paste your Paragraph here...'
                            className={styles.textArea}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                    </>
                )
                    : (
                        <textarea
                            className={styles.textArea}
                            defaultValue={wordList}
                            disabled={true}
                        />

                    )

            }

            {/* TIME SELECTOR */}
            {
                wordList && !testDuration && (
                    <TimeSelection setTestDuration={setTestDuration} />
                )
            }

        </>
    )
}

export default TextParagraph