
// document.querySelector('button').addEventListener('click', getFetch)
function getFetch(){
//const choice = document.querySelector('input').value

	//Get random date for nasa picture website
	function randomDate(start, end) {
		var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
    	month = '' + (date.getMonth() + 1),
    	day = '' + date.getDate(),
    	year = date.getFullYear()
		if (month.length < 2) month = '0' + month
		if (day.length < 2) day = '0' + day
		return [year, month, day].join('-') //return formatted date
	}

	const choice = randomDate(new Date(1995, 16, 6), new Date());
	//console.log(choice) //used for testing

	const url = `https://api.nasa.gov/planetary/apod?api_key=eMTMgDBfB907eSKD5JtnZb895W1oUbitgcYqUXL3&date=${choice}`
	fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    	console.log(data)
    	if( data.media_type === 'image' ){
        	document.querySelector('img').src = data.hdurl
			document.querySelector('#date').innerText += ' ' + choice
			//console.log(data.media_type) //used for testing
    	}else if(data.media_type === 'video'){
			getFetch() //call get fetch function to avoid video media
			//console.log(data.media_type) //used for testing
    	}
       
    	document.querySelector('h3').innerText = data.explanation
    	})
    .catch(err => {
        console.log(`error ${err}`)
    });
}

getFetch()