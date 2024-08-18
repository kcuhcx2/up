import * as yup from 'yup';
import { CalculatorFrequency } from './types';

/**
 * A basic Yup schema to ensure we get valid values for our application
 */
export const depositCalculatorSchema = yup.object({
    deposit: yup
        .number()
        .required('Deposit is required')
        .positive('Deposit must be a positive number'),
    interest: yup
        .number()
        .required('Interest rate is required')
        .min(0, 'Interest rate must be at least 0'),
    terms: yup
        .number()
        .required('Terms is required')
        .positive('Terms must be a positive number'),
    frequency: yup
        .string()
        .required('Frequency is required')
        .oneOf(
            [CalculatorFrequency.ANNUALLY, CalculatorFrequency.AT_MATURITY, CalculatorFrequency.MONTHLY, CalculatorFrequency.QUARTERLY]
            , 'Frequency must be one of: Monthly, Quarterly, Annually, At Maturity'
        ),
});