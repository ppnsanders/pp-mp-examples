const exec = require('child-process-promise').exec

const apps = [
	{
		name: 'pp-mp-order',
		npm: true,
		bower: true
	}
]

callback(err, result) => {
	if(err) {
		console.log('-- AN ERROR OCCURRED --')
		console.log(err)
	} else {
		if(result.npm === true) {
			console.log(result.name + ' NPM packages installed successfully!')
		} else {
			//no output
		}
		if(result.bower === true) {
			console.log(result.name + ' BOWER packages installed successfully!')
		} else {
			//no output
		}
	}
}

exec('npm install')
	.then((result) => {
		console.log('pp-mp-examples NPM packages installed successfully')
		apps.forEach((application) => {
			let command = 'cd ' + application.name + '; '
			if(application.npm === true) {
				command += 'npm install; '
			}
			if(application.bower === true) {
				command += 'bower install;'
			}
			exec(command)
				.then((result) => {
					callback(null, application)
				})
				.catch((err) => {
					callback(err)
				})
		})
	})
	.catch((err) => {
		console.log('ERROR while installing packages for pp-mp-examples')
		console.log(err)
	})