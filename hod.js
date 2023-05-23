let score = document.querySelector('#score');
score = 0;

function increaseScore() {
	score++ 
   console.log("Skóre: " + score);
   const scoreDisplay = document.getElementById("score");
	 scoreDisplay.textContent = "Bodů: " + score;
 }

function hodKostkou() {
	let hod = Math.floor(Math.random() * 6 + 1);

	const kostka = document.getElementById("kostka");
  const zprava = document.getElementById("zprava");



	kostka.src = '/images/' + hod + '.png';

	
	if (hod === 6) {
		
	kostka.style.animation = 'none';
	setTimeout(function() {
	  kostka.style.animation = '';
	}, 10);

	setTimeout(function() {
	zprava.style.display = 'block';
	zprava.textContent = 'Šestka!!! Máte bod.';
    increaseScore();
    }, 4500);

	
	
	} else {
		
	kostka.style.animation = 'none';
	setTimeout(function() {
	  kostka.style.animation = '';
	}, 10);
	
	setTimeout(function() {
	zprava.style.display = 'block';
	zprava.textContent = 'Hodili jste ' + hod + '. Zkuste to znovu.';
	}, 4500);

	setTimeout(function() {
		zprava.style.display = 'none';	
		}, 6500);
	
     }
}
