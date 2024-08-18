export type CommandDepositCalculatorInput = {
    deposit: string;
    interest: string;
    terms: string;
    frequency: string;
}

export enum CalculatorFrequency {
    MONTHLY = 'Monthly',
    QUARTERLY = 'Quarterly',
    ANNUALLY = 'Annually',
    AT_MATURITY = 'At Maturity',
}

export type DepositCalculatorInput = {
    deposit: number;
    interest: number;
    termsInMonths: number;
    frequency: CalculatorFrequency;
}