import { ValidationError } from "yup";
import { CalculatorFrequency, CommandDepositCalculatorInput, DepositCalculatorInput } from "./types";
import { depositCalculatorSchema } from "./validator";

/**
 * This is to keep the common use of frequency consistent throughout the application
 * @param frequency The CLI based input
 * @returns a mapped version for our calculator frequency
 */
export const getInterestFrequency = (frequency: string): CalculatorFrequency => {
    const cleanedFrequency = frequency.toLowerCase().trim();
    switch(cleanedFrequency){
        case 'monthly':
            return CalculatorFrequency.MONTHLY
        case 'quarterly':
            return CalculatorFrequency.QUARTERLY
        case 'annually':
            return CalculatorFrequency.ANNUALLY
        case 'maturity':
            return CalculatorFrequency.AT_MATURITY
        default:
            throw new Error(`unknown param ${cleanedFrequency}`)
    }
}

/**
 * 
 * @param options The CLI based options input
 * @returns The DepositCalculatorInput which can then be consistent throughout the application 
 */
export const parsedAndValidatedInput = (options: CommandDepositCalculatorInput): DepositCalculatorInput => {
    try {
        const deposit = parseFloat(options.deposit);
        const interest = parseFloat(options.interest);
        const termsInMonths = parseFloat(options.terms);
        const frequency = getInterestFrequency(options.frequency);

        // ensure the input is consistent with the rules set
        depositCalculatorSchema.validateSync({
            deposit,
            interest,
            terms: termsInMonths,
            frequency,
        })

        return {
            deposit,
            interest,
            termsInMonths,
            frequency,
        }
    } catch (err: any) {
        // handles a yup based validation error or an unexpected error
        if (err instanceof ValidationError) {
            console.error(`Validation error: ${err.message}`);
            process.exit(1);
        } else {
            console.error(`Unexpected error: ${err.message}`);
            process.exit(1);
        }
    }
}