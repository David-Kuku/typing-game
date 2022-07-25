import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomeScreen from "../HomeScreen";

function renderHomeScreen() {
    return render(
        <BrowserRouter>
            <HomeScreen />
        </BrowserRouter>
    );
}



test('makes sure TestScreen renders correctly', async () => {
    renderHomeScreen()

    const welcomeText = screen.getByText('WELCOME TO THE TYPING GAME')
    expect(welcomeText).toBeInTheDocument()

    const btn_User = screen.getByRole('button', {name: 'Use your own Paragraph'})
    expect(btn_User).toBeInTheDocument()

    const btn_Website = screen.getByRole('button', {name: 'Use website random paragraph'})
    expect(btn_Website).toBeInTheDocument()

})