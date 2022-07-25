import { calculateResult } from "../calculateResult";


test('makes sure testParagraph renders correctly', async () => {
    const mockFn = jest.fn()
    let userText = 'I am a web developer'
    let testWords = 'I am a very good developer who works hard'
    const result = calculateResult({testWords, userText, setUserScore: mockFn})

    expect(result).toBe(4);
})