import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import TextParagraph from '../TextParagraph';
import { BrowserRouter } from 'react-router-dom';
import * as _ from 'lodash'

jest.useFakeTimers()
test('makes sure testParagraph renders correctly', async () => {
    const mockFn = jest.fn()
    const debouncedFunc = _.debounce(mockFn, 300);

    render(
        <BrowserRouter>
            <TextParagraph
                option='USER'
                setOption={mockFn}
                setTestDuration={mockFn}
                setWordList={mockFn}
                testDuration={5}
                wordList='qwe ewr' />
        </BrowserRouter>
    );
    const textArea = screen.getByPlaceholderText('Copy and Paste your Paragraph here...');

    expect(textArea).toBeInTheDocument();

    // onchange textrea
    fireEvent.change(textArea)

    for (let i = 0; i < 300; i++) {
        // Execute the debounced function
        debouncedFunc();
    }
    expect(mockFn).not.toBeCalled()

    // Fast forward time => 10ms will be passed
    jest.runAllTimers()
    expect(mockFn).toHaveBeenCalledTimes(1)

});

test('makes sure testParagraph renders correctly', async () => {
    const mockFn = jest.fn()

    render(
        <BrowserRouter>
            <TextParagraph
                option='WEBSITE'
                setOption={mockFn}
                setTestDuration={mockFn}
                setWordList={mockFn}
                testDuration={5}
                wordList='qwe ewr' />
        </BrowserRouter>
    );
    const textArea = screen.queryByPlaceholderText('Copy and Paste your Paragraph here...');

    const textBox = screen.getByRole('textbox')
    expect(textBox).toBeDisabled()
    expect(textArea).not.toBeInTheDocument();
})

