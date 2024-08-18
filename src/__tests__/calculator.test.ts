import { calculatedBalance } from "../calculator";
import { CalculatorFrequency } from "../types";

describe('calculator test suite', () => {
    describe('monthly calculator test suite', () => {
        it('should be able to return the correct balance for 0 months', () => {
            expect(calculatedBalance({
                deposit: 10000,
                termsInMonths: 0,
                frequency: CalculatorFrequency.MONTHLY,
                interest: 1.1
            })).toBe(10000)
        });

        it('should be able to return the correct balance for 3 months', () => {
            expect(calculatedBalance({
                deposit: 10000,
                termsInMonths: 3,
                frequency: CalculatorFrequency.MONTHLY,
                interest: 1.1
            })).toBe(10028)
        });

        it('should be able to return the correct balance for 12 months', () => {
            expect(calculatedBalance({
                deposit: 10000,
                termsInMonths: 12,
                frequency: CalculatorFrequency.MONTHLY,
                interest: 1.1
            })).toBe(10111)
        });

        it('should be able to return the correct balance for 60 months', () => {
            expect(calculatedBalance({
                deposit: 40000,
                termsInMonths: 60,
                frequency: CalculatorFrequency.MONTHLY,
                interest: 5.40
            })).toBe(52367)
        });
    });

    describe('quarterly calculator test suite', () => {
        it('should be able to return the correct balance for 0 months', () => {
            expect(calculatedBalance({
                deposit: 10000,
                termsInMonths: 0,
                frequency: CalculatorFrequency.QUARTERLY,
                interest: 1.1
            })).toBe(10000)
        });

        it('should be able to return the correct balance for 3 months', () => {
            expect(calculatedBalance({
                deposit: 10000,
                termsInMonths: 3,
                frequency: CalculatorFrequency.QUARTERLY,
                interest: 1.1
            })).toBe(10028)
        });

        it('should be able to return the correct balance for 12 months', () => {
            expect(calculatedBalance({
                deposit: 10000,
                termsInMonths: 12,
                frequency: CalculatorFrequency.QUARTERLY,
                interest: 1.1
            })).toBe(10110)
        });    
    });

    describe('annually calculator test suite', () => {
        it('should be able to return the correct balance for 0 months', () => {
            expect(calculatedBalance({
                deposit: 10000,
                termsInMonths: 0,
                frequency: CalculatorFrequency.ANNUALLY,
                interest: 1.1
            })).toBe(10000)
        });

        it('should be able to return the correct balance for 12 months', () => {
            expect(calculatedBalance({
                deposit: 10000,
                termsInMonths: 12,
                frequency: CalculatorFrequency.ANNUALLY,
                interest: 1.1
            })).toBe(10110)
        });

        it('should be able to return the correct balance for 60 months', () => {
            expect(calculatedBalance({
                deposit: 10000,
                termsInMonths: 60,
                frequency: CalculatorFrequency.ANNUALLY,
                interest: 1.1
            })).toBe(10562)
        });    
    });

    describe('at maturity calculator test suite', () => {
        it('should be able to return the correct balance for 0 months', () => {
            expect(calculatedBalance({
                deposit: 10000,
                termsInMonths: 0,
                frequency: CalculatorFrequency.AT_MATURITY,
                interest: 1.1
            })).toBe(10000)
        });

        it('should be able to return the correct balance for 3 months', () => {
            expect(calculatedBalance({
                deposit: 40000,
                termsInMonths: 3,
                frequency: CalculatorFrequency.AT_MATURITY,
                interest: 5.4
            })).toBe(40540)
        });

        it('should be able to return the correct balance for 12 months', () => {
            expect(calculatedBalance({
                deposit: 40000,
                termsInMonths: 12,
                frequency: CalculatorFrequency.AT_MATURITY,
                interest: 5.4
            })).toBe(42160)
        });

        it('should be able to return the correct balance for 60 months', () => {
            expect(calculatedBalance({
                deposit: 40000,
                termsInMonths: 60,
                frequency: CalculatorFrequency.AT_MATURITY,
                interest: 5.40
            })).toBe(50800)
        });
    });
})