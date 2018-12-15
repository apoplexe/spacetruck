import { render } from 'react-testing-library';
import React from 'react';
import InventoryForm from '../InventoryForm';

describe('InventoryForm', () => {
    it('should show inputs', () => {
        const { container } = render(<InventoryForm />)

        expect(container.querySelectorAll('form')).toHaveLength(1);
    })
})