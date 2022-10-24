function hodKostkou() {
	let hod = Math.floor(Math.random() * 6 + 1);

	kostka.src = '/images/' + hod + '.png';
	if (hod === 6) {
		zprava.textContent = 'Šestka!!! Vyhráli jste.'
	} else {
		zprava.textContent = 'Hodili jste ' + hod + '. Zkuste to znovu.';
	}
}