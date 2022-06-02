/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import { Key } from './key';

describe('Given the component Key', () => {
    const mockKey = 'Jorge';

    describe('When calling it', () => {
        test('Then it should be rendered', () => {
            // Arrange
            render(<Key item={mockKey} />);

            const labelInput = screen.getByText(/Jor/);

            // Assert
            expect(labelInput).toBeInTheDocument();
        });
    });
});
