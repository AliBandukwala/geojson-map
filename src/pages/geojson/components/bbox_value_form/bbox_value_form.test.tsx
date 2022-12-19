import { render, screen } from '@testing-library/react';
import BBoxValuesForm from './bbox_value_form';

describe('BBoxValuesForm tests',() => {

    it('displays form correctly', () => {
        render(<BBoxValuesForm />)
        const form = screen.getByRole('form')
        expect(form).toBeInTheDocument();
    })

    it('displays button correctly', () => {
        render(<BBoxValuesForm />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Get Features');
    })
})

