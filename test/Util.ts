import ava from 'ava';
import util from '../src';

ava('no new', (test): void => {
	test.throws(() => new TimerManager(), { instanceOf: Error });
});

// Ehh, not sure how the rest should be tested, tbd
