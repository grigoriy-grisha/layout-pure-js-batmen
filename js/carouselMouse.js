const companiesHor = document.querySelector('.companies-hor');

companiesHor.addEventListener('dragstart', (event) => {
    event.preventDefault();
});
companiesHor.addEventListener('mousedown', (event) => {
    let shiftXOne = event.clientX - companiesHor.getBoundingClientRect().left;
    
    
    console.log(shiftXOne)
    
    
    moveAt(event.pageX,);
  
	// переносит мяч на координаты (pageX, pageY),
	// дополнительно учитывая изначальный сдвиг относительно указателя мыши
	function moveAt() {
		if (shiftXOne - shiftXTwo > 0) {
			
		}
  
	}
  
	
  

	
  

    companiesHor.addEventListener('mouseup', (event) => {
		let shiftXTwo = event.clientX - companiesHor.getBoundingClientRect().left;
		console.log(shiftXTwo)
	  });

	
      companiesHor.ondragstart = function() {
		return false;
    }
        

});



