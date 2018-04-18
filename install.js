const exec = require('child-process-promise').exec

const apps = [
			{
				name: 'pp-mp-order',
				npm: true,
				bower: true
			},
			{
				name: 'pp-mp-delayed-order',
				npm: true,
				bower: true
			},
			{
				name: 'pp-mp-connected-path',
				npm: true,
				bower: true
			},
			{
				name: 'pp-mp-managed-path',
				npm: true,
				bower: true
			}
		]

function callback(err, result) {
	if(err) {
		console.log('-- AN ERROR OCCURRED --')
		console.log(err)
	} else {
		if(result.npm === true) {
			console.log(result.name + ' NPM packages installed successfully!')
		} else {
			console.log('NO NPM packages to install!')
		}
		if(result.bower === true) {
			console.log(result.name + ' BOWER packages installed successfully!')
		} else {
			console.log('NO BOWER packages to install!')
		}
	}
}

exec('npm install; npm install bower;')
	.then((result) => {
		console.log('pp-mp-examples NPM packages installed successfully')
		apps.forEach((myApp) => {
			let command  = 'cd ' + myApp.name + '; '
			if(myApp.npm === true) {
				command += 'npm install; '
			}
			if(myApp.bower === true) {
				command += 'bower install;'
			}
			exec(command)
				.then((result) => {
					callback(null, myApp)
				})
				.catch((err) => {
					callback(err)
				});
		});
	})
	.catch((err) => {
		console.log('ERROR while installing packages for pp-mp-examples')
		console.log(err)
	})