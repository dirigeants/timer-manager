import ava from 'ava';
import { TimerManager } from '../src';

ava('clear timeout', (test): void => {
	test.plan(3);

	// eslint-disable-next-line dot-notation
	test.is(TimerManager['_timeouts'].size, 0);
	const timeout = TimerManager.setTimeout(() => {
		test.fail();
	}, 20000);
	// eslint-disable-next-line dot-notation
	test.is(TimerManager['_timeouts'].size, 1);
	TimerManager.clearTimeout(timeout);
	// eslint-disable-next-line dot-notation
	test.is(TimerManager['_timeouts'].size, 0);
});

ava('clear interval', (test): void => {
	test.plan(3);

	// eslint-disable-next-line dot-notation
	test.is(TimerManager['_intervals'].size, 0);
	const interval = TimerManager.setInterval(() => {
		test.fail();
	}, 20000);
	// eslint-disable-next-line dot-notation
	test.is(TimerManager['_intervals'].size, 1);
	TimerManager.clearInterval(interval);
	// eslint-disable-next-line dot-notation
	test.is(TimerManager['_intervals'].size, 0);
});
