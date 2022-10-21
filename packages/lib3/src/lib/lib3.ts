import { logger } from '@nrwl/devkit';

export function getOutput(): string {
  const output = process.env['MESSAGE'] || '';
  logger.info(`--> Output: ${output}`);
  return output;
}
