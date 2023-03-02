function getRandomNumber() {
	return Math.floor(Math.random() * 1000000); // generate a random number between 0 and 999999
}
console.log(getRandomNumber());

function fetchQRCode() {
	var img = document.querySelector(".qr");
	var randomNumber = getRandomNumber();
	var url = `https://api.qrserver.com/v1/create-qr-code/?data=${randomNumber}&bgcolor=2c7dfa&color=fff&size=272x272&`;

	fetch(url)
		.then((response) => response.blob())
		.then((blob) => {
			img.src = URL.createObjectURL(blob);
		})
		.catch((error) => console.error(error));
}

window.addEventListener("load", fetchQRCode);
