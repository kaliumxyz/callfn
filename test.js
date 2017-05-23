'use strict'
import test from 'ava'
const call = require('./')

test('can a single function.', t => {
	call( _ => t.pass())
})

test('can any amount of functions.', t => {
	let i = 0
	call( _ => i++, _ => i++, _ => i++)
	t.is(i, 3)
})

test('will log exceptions.', t => {
	call('', _ => t.pass())
})