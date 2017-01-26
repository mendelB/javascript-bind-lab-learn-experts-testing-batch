const digitalClock = {
	time: Math.round(new Date().getTime() / 1000),
	startTicking: function(){
		setInterval(function() {this.time++}.bind(this), 1000)
	}
}

function censor(word, string) {
	let re = new RegExp(word, "g");
	return string.replace(re, 'BLEEP')
}

function violenceCensor(string) {
	return censor.bind(this, 'violence', string)()
}

const drugsCensor = string => censor.bind(null, 'drugs', string)()