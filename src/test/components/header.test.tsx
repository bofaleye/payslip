import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { IonApp } from '@ionic/react';
import Header from '../../components/header';


// describe('Header component', () => {
  test('renders title correctly', async () => {
    const { getByText } = render(<IonApp><Header title="Test Title" /></IonApp>);
    await waitFor(() => {
        // Assert that the modal is present
        expect(getByText('Test Title')).toBeInTheDocument();
      })
    
  });

//   test('renders back button when isBackButton prop is true', () => {
//     const { getByTestId } = render(<Header title="Test Title" isBackButton={true} />);
//     expect(getByTestId('back-button')).toBeInTheDocument();
//   });

//   test('renders download button', () => {
//     const { getByTestId } = render(<Header title="Test Title" />);
//     expect(getByTestId('download-button')).toBeInTheDocument();
//   });

//   test('calls buttonMethod when download button is clicked', () => {
//     const buttonMethod = jest.fn();
//     const { getByTestId } = render(<Header title="Test Title" buttonMethod={buttonMethod} />);
//     fireEvent.click(getByTestId('download-button'));
//     expect(buttonMethod).toHaveBeenCalledTimes(1);
//   });

//   test('back button calls history.goBack', () => {
//     const mockHistoryGoBack = jest.fn();
//     jest.spyOn(window.history, 'goBack').mockImplementation(mockHistoryGoBack);
//     const { getByTestId } = render(<Header title="Test Title" isBackButton={true} />);
//     fireEvent.click(getByTestId('back-button'));
//     expect(mockHistoryGoBack).toHaveBeenCalledTimes(1);
//   });
// });