import { render, fireEvent, cleanup } from 'react-testing-library';
import React from 'react';
import InventoryForm from '../InventoryForm';

afterEach(cleanup)

describe('InventoryForm', () => {
    it('should show inputs', () => {
        const { container } = render(<InventoryForm />)
        expect(container.querySelectorAll('form')).toHaveLength(1);
        expect(container.querySelectorAll('input')).toHaveLength(5);
    })
})
