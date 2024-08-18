import { Command } from 'commander';
import { CommandDepositCalculatorInput } from './types';
import { parsedAndValidatedInput } from './helpers';
import { calculatedBalance } from './calculator';

const program = new Command();

/**
 * The entry point for our calculator
 * An example to run is: npm run start -- calculator --deposit=10000 --interest=1.1 --terms=55 --frequency=monthly
 */
program.command('calculator')
    .description('A CLI input to calculate your terms deposit')
    .requiredOption('--deposit <number>', 'initial deposit')
    .requiredOption('--interest <number>', 'interest rate')
    .requiredOption('--terms <number>', 'investment terms in months')
    .requiredOption('--frequency <string>', 'Interest paid (Monthly, Quarterly, Annually, Maturity)')
    .action((options: CommandDepositCalculatorInput) => {
        console.log(options);
        const depositInput = parsedAndValidatedInput(options);
        const balance = calculatedBalance(depositInput);
        console.log(balance);
    })

program.parse(process.argv);