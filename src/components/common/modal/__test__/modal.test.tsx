import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '../Modal';

test('makes sure modal component works well', async () => {
    const mockFn = jest.fn()
    render(<Modal
        setOpenModal={mockFn}
        setOption={mockFn}
        setTestDuration={mockFn}
        setTimeElapsed={mockFn}
        setWordList={mockFn}
        userScore={10}
    />);
    const btnElement = screen.getByRole('button');
    const timeElapsed = screen.getByText('Time elapsed!!');
    const userScore = screen.getByText(10);

    expect(userScore).toBeInTheDocument();
    expect(timeElapsed).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toHaveTextContent('Have another test')

    fireEvent.click(btnElement)
    expect(mockFn).toHaveBeenCalledTimes(5)

});
