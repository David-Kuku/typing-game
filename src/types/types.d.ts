export type TWordContext = {
    wordList: string;
    setWordList: (val: string) => void
    timeElapsed: boolean;
    setTimeElapsed:(val: boolean)=> void;
    setTestDuration:(val: number)=> void;
    testDuration: number;
    userScore: number;
    setUserScore: (val: number)=> void;
    setUserOption: (val: TOption) => void,
    userOption: TOption
}

export type TOption = 'USER' | 'WEBSITE' | ''

type TRemainingTimeObject = {
    seconds: string;
    minutes: string
}
export type TRemainingTime = TRemainingTimeObject | "FINISHED"