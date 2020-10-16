
const modalTiser  = document.querySelector('.modal-tiser');

const heroContentTrailer = document.querySelector('.hero-content-info-main-trailer-label');
const modalClose = document.querySelector('.modal-close');


const addModalWindow = (event,el) => {
	el.classList.add('modal-is-open');
};


const removeModalWindow = (event,el) => {
	el.classList.remove('modal-is-open');
};


heroContentTrailer.addEventListener('click', () => {
	addModalWindow(event, modalTiser);
});
modalClose.addEventListener('click', () => {
	removeModalWindow(event, modalTiser);
});

modalTiser.addEventListener('click', (event) => {
	if(event.target.classList.contains('modal-tiser')) {
		removeModalWindow(event, modalTiser);
	}
});