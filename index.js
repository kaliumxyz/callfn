'use strict'

function call(...callback) {
	if (callback)
		callback.forEach(f => {
			try {
				f()
			} catch (e) {
				console.error(`callfn: Your callback function(s) threw the following exception: `, e)
			}

		})
}

module.exports = call