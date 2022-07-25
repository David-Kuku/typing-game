import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "../../../context/context";
import { TWordContext } from "../../../types/types";
import TextContainer from "../TextContainer";

function renderTextContainer(value: TWordContext) {
    return render(
        <AppContextProvider value={value}>
            <BrowserRouter>
                <TextContainer />
            </BrowserRouter>
        </AppContextProvider>
    );
}



test('makes sure textContainer renders correctly', async () => {
    renderTextContainer({
        wordList: '',
        setWordList: () => { },
        timeElapsed: true,
        setTimeElapsed: () => { },
        setTestDuration: () => { },
        testDuration: 0,
        userScore: 0,
        setUserScore: () => { },
        setUserOption: () => { },
        userOption: ''
    })

    const timeOverMsg = screen.getByText('Below is your score which shows your typing speed and accuracy.')
    expect(timeOverMsg).toBeInTheDocument()


})