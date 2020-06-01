import ava from 'ava';
import { TimerManager } from '../src';

ava('destroy', (test): void => {
	test.plan(6);

	// eslint-disable-next-line dot-notation
	test.is(TimerManager['_timeouts'].size, 0);
	TimerManager.setTimeout(() => {
		test.fail();
	}, 20000);
	// eslint-disable-next-line dot-notation
	test.is(TimerManager['_timeouts'].size, 1);

	// eslint-disable-next-line dot-notation
	test.is(TimerManager['_intervals'].size, 0);
	TimerManager.setInterval(() => {
		test.fail();
	}, 20000);
	// eslint-disable-next-line dot-notation
	test.is(TimerManager['_intervals'].size, 1);
	TimerManager.destroy();
	// eslint-disable-next-line dot-notation
	test.is(TimerManager['_intervals'].size, 0);
	// eslint-disable-next-line dot-notation
	test.is(TimerManager['_timeouts'].size, 0);
});
