import { getInterestFrequency, parsedAndValidatedInput } from "../helpers";
import { CalculatorFrequency } from "../types";

describe('helpers test suite', () => {
    describe('getInterestFrequency test suite', () => {
        it.each([
            ['monthly', CalculatorFrequency.MONTHLY],
            ['quarterly', CalculatorFrequency.QUARTERLY],
            ['annually', CalculatorFrequency.ANNUALLY],
            ['maturity', CalculatorFrequency.AT_MATURITY],
            ['Monthly', CalculatorFrequency.MONTHLY],
            [' Quarterly ', CalculatorFrequency.QUARTERLY],
        ])('should return the correct frequency for "%s"', (input, expected) => {
            expect(getInterestFrequency(input)).toBe(expected);
        });

        it('should throw an error for an unknown frequency', () => {
            expect(() => getInterestFrequency('unknown')).toThrow('unknown param unknown');
        });
    })

    describe('parsedAndValidatedInput test suite', () => {
        it('should be able to return a valid parsed input', () => {
            const result = parsedAndValidatedInput({
                deposit: '10000',
                interest: '10.5',
                terms: '3',
                frequency: ' monthly ',
            });

            expect(result).toStrictEqual({
                deposit: 10000,
                interest: 10.5,
                termsInMonths: 3,
                frequency: CalculatorFrequency.MONTHLY,
            });
        });
    });
});