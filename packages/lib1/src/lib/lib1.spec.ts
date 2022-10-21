import mockedEnv, { RestoreFn } from 'mocked-env';
import { getOutput } from './lib1';

describe('lib1', () => {
  let restore: RestoreFn;

  afterEach(() => {
    restore && restore();
  });

  test.each([['Hello'], ['Hi!']])(
    'should return  %s for RUNNER_DEBUG= %s',
    (message: string) => {
      restore = mockedEnv({
        MESSAGE: message,
      });

      expect(getOutput()).toEqual(message);
    }
  );
});
