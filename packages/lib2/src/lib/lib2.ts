export function getOutput(): string {
  const output = process.env['MESSAGE'] || '';
  return output;
}
