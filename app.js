function getRandomNumber() {
	return Math.floor(Math.random() * 1000000);
}
function fetchQRCode() {
	var img = document.querySelector(".qr");
	var randomNumber = getRandomNumber();
	var url = `https://api.qrserver.com/v1/create-qr-code/?data=${randomNumber}&color=2c7dfa&bgcolor=fff&size=272x272&`;

	fetch(url)
		.then((response) => response.blob())
		.then((blob) => {
			img.src = URL.createObjectURL(blob);
		})
		.catch((error) => console.error(error));
}

window.addEventListener("load", fetchQRCode);
