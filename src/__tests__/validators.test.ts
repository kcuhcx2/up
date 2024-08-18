import * as yup from 'yup';
import { CalculatorFrequency } from '../types';
import { depositCalculatorSchema } from '../validator';

describe('depositCalculatorSchema test suite', () => {
    it('should pass validation with valid input for MONTHLY', async () => {
        const validInput = {
            deposit: 10000,
            interest: 1.1,
            terms: 3,
            frequency: CalculatorFrequency.MONTHLY,
        };

        await expect(depositCalculatorSchema.isValid(validInput)).resolves.toBe(true);
    });

    it('should pass validation with valid input for ANNUALLY', async () => {
        const validInput = {
            deposit: 10000,
            interest: 1.1,
            terms: 3,
            frequency: CalculatorFrequency.ANNUALLY,
        };

        await expect(depositCalculatorSchema.isValid(validInput)).resolves.toBe(true);
    });

    it('should pass validation with valid input for AT_MATURITY', async () => {
        const validInput = {
            deposit: 10000,
            interest: 1.1,
            terms: 3,
            frequency: CalculatorFrequency.AT_MATURITY,
        };

        await expect(depositCalculatorSchema.isValid(validInput)).resolves.toBe(true);
    });

    it('should pass validation with valid input for QUARTERLY', async () => {
        const validInput = {
            deposit: 10000,
            interest: 1.1,
            terms: 3,
            frequency: CalculatorFrequency.QUARTERLY,
        };

        await expect(depositCalculatorSchema.isValid(validInput)).resolves.toBe(true);
    });

    it.each([
        [{ deposit: -10000 }, 'Deposit must be a positive number'],
        [{ deposit: null }, 'Deposit is required'],
        [{ interest: -1 }, 'Interest rate must be at least 0'],
        [{ interest: null }, 'Interest rate is required'],
        [{ terms: -3 }, 'Terms must be a positive number'],
        [{ terms: null }, 'Terms is required'],
        [{ frequency: 'Weekly' }, 'Frequency must be one of: Monthly, Quarterly, Annually, At Maturity'],
        [{ frequency: null }, 'Frequency is required'],
    ])('should fail validation when %o is invalid', async (invalidField, expectedError) => {
        const baseValidInput = {
            deposit: 10000,
            interest: 1.1,
            terms: 3,
            frequency: CalculatorFrequency.MONTHLY,
        };

        const invalidInput = { ...baseValidInput, ...invalidField };

        await expect(depositCalculatorSchema.validate(invalidInput)).rejects.toThrow(expectedError);
    });
});
