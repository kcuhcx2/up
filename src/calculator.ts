import { CalculatorFrequency, DepositCalculatorInput } from "./types";

const calculateRate = (interest: number) => interest / 100;

/**
 * This calculates the at maturity balance
 * @param input The deposit calculator input
 * @returns The at maturity balance
 */
const calculateAtMaturityBalance = (input: DepositCalculatorInput): number => {
    const { interest, termsInMonths, deposit } = input;
    // Convert the interest rate from a percentage to a decimal e.g. 1.1% to 0.011
    const RATE = calculateRate(interest);

    // Convert the term from months to years
    const termInYears = termsInMonths / 12;

    // Calculate the total interest rate over the entire term
    // Since there is no compounding, multiply the interest rate by the term - in years
    // And add 1 to keep the rate as a multiplier
    const atMaturityInterestRate = 1 + (RATE * termInYears);

    return deposit * atMaturityInterestRate;
}

/**
 * This calculates the compounding changes at constant intervals
 * @param input The deposit calculator input
 * @param compounding The compounding factor e.g. 12 for monthly
 * @returns The balance with compounding interest
 */
const calculateCompoundingBalance = (input: DepositCalculatorInput, compounding: number): number => {
    const { deposit, interest, termsInMonths } = input;
    // Convert the interest rate from a percentage to a decimal e.g. 1.1% to 0.011
    const RATE = calculateRate(interest);

    // We calculate the incremental compounding rate by dividing the annual rate by the compounder
    // This gives us the incremental compounding rate
    // And add 1 to keep the rate as a multiplier
    const compoundingRate = 1 + RATE / compounding

    // We convert the terms into years
    // We then use powers to show how many times we want this to compound. This gives us the compounding periods
    const termsInYears = termsInMonths / 12;
    const termsCompounded = compounding * termsInYears

    // We then multiple the deposit by the compounding interest calculation
    return deposit * Math.pow(compoundingRate, termsCompounded);
}

/**
 * 
 * @param input The deposit calculator input
 * @returns The final projected deposit and savings balance
 */
export const calculatedBalance = (input: DepositCalculatorInput) => {
    const { frequency } = input;
    let balance: number;
  
    switch (frequency) {
      case CalculatorFrequency.MONTHLY:
        // Get the balance with interest compounding 12 times per year
        balance = calculateCompoundingBalance(input, 12);
        break;
      case CalculatorFrequency.QUARTERLY:
        // Get the balance with interest compounding 4 times over a year
        balance = calculateCompoundingBalance(input, 4);
        break;
      case CalculatorFrequency.ANNUALLY:
        // Get the balance with interest compounding 1 time over a year
        balance = calculateCompoundingBalance(input, 1);
        break;
      case CalculatorFrequency.AT_MATURITY:
        // Get the balance with the interest applied at the end of the term
        balance = calculateAtMaturityBalance(input);
        break;
      default:
        throw new Error('Invalid interest frequency');
    }

    // round to nearest integer for simplicity
    return Math.round(balance);
}
