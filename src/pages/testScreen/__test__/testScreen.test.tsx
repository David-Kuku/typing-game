import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "../../../context/context";
import { TWordContext } from "../../../types/types";
import TestScreen from "../TestScreen";
TestScreen
function renderTestScreen(value: TWordContext) {
    return render(
        <AppContextProvider value={value}>
            <BrowserRouter>
                <TestScreen />
            </BrowserRouter>
        </AppContextProvider>
    );
}



test('makes sure TestScreen renders correctly', async () => {
    renderTestScreen({
        wordList: '',
        setWordList: () => { },
        timeElapsed: true,
        setTimeElapsed: () => { },
        setTestDuration: () => { },
        testDuration: 1.2,
        userScore: 0,
        setUserScore: () => { },
        setUserOption: () => { },
        userOption: ''
    })

    const testDuration = screen.getByTestId('time')
    expect(testDuration).toBeInTheDocument()

    const startTypingText = screen.getByText('Start Typing here...')
    expect(startTypingText).toBeInTheDocument()

})