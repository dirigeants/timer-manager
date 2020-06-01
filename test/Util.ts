import ava from 'ava';
import { TimerManager } from '../src';

ava('no new', (test): void => {
	test.throws(() => new TimerManager(), { instanceOf: Error });
});

ava.cb('timeout', (test): void => {
	TimerManager.setTimeout(() => {
		test.pass();
		test.end();
	}, 20);
});

ava.cb('interval', (test): void => {
	test.plan(2);

	let i = 0;
	const interval = TimerManager.setInterval(() => {
		if (++i < 3) {
			test.pass();
		} else {
			TimerManager.clearInterval(interval);
			test.end();
		}
	}, 20);
});
