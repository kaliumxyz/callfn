# callfn [![Build Status](https://travis-ci.org/kaliumxyz/callfn.svg?branch=master)](https://travis-ci.org/kaliumxyz/callfn)
> dealing with all those callbacks.

## install
simply download it from npm.
```
$ yarn add callfn
```

## usage
Require it and put it in any function that needs to have its callbacks handled.
```js
const call = require('callfn')

function someAsyncHandler(...callback) {
	call(...callback)
}
```

## tests
```
$ yarn test
```

## license
MIT © [Kalium](https://kalium.xyz)