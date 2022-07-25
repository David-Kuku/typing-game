import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';

test('makes sure button component works well', async () => {
    const onClick = jest.fn()
    render(<Button value='testName' onClick={onClick} variant = 'Transparent'/>);
    const btnElement = screen.getByRole('button');

    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toHaveTextContent('testName')
    // expect(btnElement).toHaveStyle('background-color: #6645F4;')

    fireEvent.click(btnElement)
    expect(onClick).toHaveBeenCalledTimes(1)

});
