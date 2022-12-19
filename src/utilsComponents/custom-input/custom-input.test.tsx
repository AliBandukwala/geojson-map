import { render, screen } from '@testing-library/react';
import CustomInput from './custom-input';

describe('CustomInput tests',() => {

    const setup = (): HTMLInputElement => {
        render(
            <CustomInput 
                id='id' 
                label='label' 
                value={1} 
                onChangeHandler={() => {}}
            />
        )
        const inputNode = screen.getByLabelText('label') as HTMLInputElement

        return inputNode
    }

    it('displays input correctly', () => {
        const inputNode = setup()
        expect(inputNode).toBeInTheDocument();
    })

    it('has given value', () => {
        const inputNode = setup()
        expect(inputNode.value).toBe('1');
    })

    it('has correct id', () => {
        const inputNode = setup()
        expect(inputNode).toHaveAttribute('id', 'id');
    })
})

