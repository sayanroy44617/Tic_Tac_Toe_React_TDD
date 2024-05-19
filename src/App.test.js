import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Board from './App';

describe('testing render and functionalities of <Board />', () => {
  it('<Board /> renders without crashing', () => {
    render(<Board />);
  });

  it('Board renders the status correctly', () => {
    const { getByText } = render(<Board />);
    expect(getByText('Next Player is : X')).toBeInTheDocument();
  });

  it('Board renders the correct status after a move', () => {
    const { getByText, getAllByTestId } = render(<Board />);
    fireEvent.click(getAllByTestId('square')[0]);
    expect(getByText('Next Player is : O')).toBeInTheDocument();
  });

  it('displays the winner when there is a winner', () => {
    const { getByText, getAllByTestId } = render(<Board />);
    fireEvent.click(getAllByTestId('square')[0]);
    fireEvent.click(getAllByTestId('square')[1]);
    fireEvent.click(getAllByTestId('square')[3]);
    fireEvent.click(getAllByTestId('square')[4]);
    fireEvent.click(getAllByTestId('square')[6]);
    expect(getByText('Winner : X')).toBeInTheDocument();
  });

  it('does not allow a square to be clicked if already filled or there is a winner', () => {
    const { getAllByTestId } = render(<Board />);
    fireEvent.click(getAllByTestId('square')[0]);
    fireEvent.click(getAllByTestId('square')[0]);
    fireEvent.click(getAllByTestId('square')[1]);
    fireEvent.click(getAllByTestId('square')[1]);
    expect(getAllByTestId('square')[0]).toHaveTextContent('X');
    expect(getAllByTestId('square')[1]).toHaveTextContent('O');
  });
});
