import React from "react";
import { WebsiteParagraph } from "../../../utils/mock";
import Button from "../button/Button";
import styles from "./Modal.module.css";
import { TOption } from '../../../types/types';

type TProps = {
    setOpenModal: (val: boolean) => void;
    setOption: (val: TOption) => void;
    setWordList: (val: string) => void;
    setTestDuration: (val: number) => void;
    userScore: number;
    setTimeElapsed: (val: boolean) => void
}
const Modal = ({
    setOpenModal,
    setOption,
    setTestDuration,
    setWordList,
    userScore,
    setTimeElapsed
}: TProps) => {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>

                <div className={styles.title}>
                    <h3>Time elapsed!!</h3>
                </div>
                <div className={styles.body}>
                    <p>Below is your score which shows your typing speed and accuracy.</p>
                </div>
                <h4 className={styles.userScore}>{userScore}</h4>
                <div className={styles.footer}>
                    <Button
                        value="Have another test"
                        onClick={() => {
                            setOption('');
                            setWordList(WebsiteParagraph);
                            setTestDuration(0)
                            setOpenModal(false)
                            setTimeElapsed(false)
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Modal;