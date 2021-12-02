const startPlaywrightLoadTest = require('playwright-loadtest');


(async () => {
	const results = await startPlaywrightLoadTest({
			file:'./plays/sample.js', // path to file
			samplesRequested: process.env.NUMBER_OF_RUNS, // number of samples requested
			concurrencyRequested: process.env.NUMBER_OF_USERS, // number of concurrency requested
	});
	console.log("RESULTS ARE ", results)
})() 