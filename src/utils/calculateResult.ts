
type TArgs = {
    testWords: string;
    userText: string;
    setUserScore: (val: number) => void
}

export const calculateResult = ({ setUserScore, userText, testWords }: TArgs) => {
    const testArray = new Set(testWords.split(/[.,!,?,;,...," "]/))
    const userTextArray = new Set(userText.split(/[.,!,?,;,...," "]/))

    let res = 0
    userTextArray.forEach((str: string) => {
        if (str && testArray.has(str)) {
            res += 1
        }
    })
    
    setUserScore(res)

    return res

}





// const debouncedSave = React.useRef(
    //     debounce(async (query) => {
    //         setUserText(query);
    //     }, 300)
    // ).current;

// const calculateResult = () => {
    //     const testArray = new Set(value.split(/[.,!,?,;,...," "]/))
    //     const userTextArray = new Set(userText.split(/[.,!,?,;,...," "]/))

    //     let res = 0
    //     userTextArray.forEach((str: string) => {
    //         if (str && testArray.has(str)) {
    //             res += 1
    //         }
    //     })

    //     setResult(res)

    // }

    // const debouncedSave = React.useRef(
    //     debounce(async (query) => {
    //         setValue(query);
    //     }, 300)
    // ).current;