/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import { Key } from './key';

describe('Given the component Key', () => {
    describe('When calling it', () => {
        test('Then it should be rendered', () => {
            const mockKey = 'Jorge';
            // Arrange
            render(<Key item={mockKey} />);

            const labelInput = screen.getByText(/Jor/);

            // Assert
            expect(labelInput).toBeInTheDocument();
        });
    });
    describe('When calling it', () => {
        test('Then it should be rendered', () => {
            const mockKey = 'Comprobation';
            // Arrange
            render(<Key item={mockKey} />);

            const labelInput = screen.getByText(/bation/);

            // Assert
            expect(labelInput).toBeInTheDocument();
        });
    });
});
