class SliderCarousel{
    constructor({wrap,item,prev,next,slidesToShow,position = 0,responsive = [],infinity}) {
        this.wrap = document.querySelector(wrap);
        this.item = document.querySelector(item);
        this.slidesItem = document.querySelector(item).children;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.slidesToShow = slidesToShow;  
        this.infinity = infinity;   
        this.option = {
            position: 0,
            widthSlide: 100,
            shiftXOne:0,
            shiftXTwo:0,
        }
        this.responsive = responsive;
    }

    init() {
        this.showSlider(); 
        this.controlSlider()
        this.CaruoselSliderTouch()
        
       
        
        
    }

    showSlider() {
       
        
        const style = document.createElement('style');
        this.item.classList.add('grisha-slider');
        this.wrap.classList.add('grisha-slider__wrap')

        for (const item of this.slidesItem ) {
            item.classList.add('grisha-slider-item');
        }
        style.textContent = `
            .grisha-slider__wrap {
                overflow:hidden;
                background-color:#232323;
                
                transition: transform 0.5s !important;
                will-change: transform !important;
                
            }
            .grisha-slider {
                display:flex;
                transition: transform 0.5s ;
                will-change: transform ;
                align-items:center;
                justify-content: space-between;
                
                
            
            }
            .grisha-slider-item {
                flex:0 0 ${this.option.widthSlide}%;
                margin: auto 0;
                
            }
           
           
        `
        document.head.appendChild(style);
    };
    
    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }
    prevSlider() {
        if (this.infinity || this.option.position > 0) {
            --this.option.position;
            console.log(this.option.position);
            if (this.option.position < 0) {
                this.option.position = this.slidesItem.length - this.slidesToShow;
            }
            this.item.style.transform = `translateX(-${this.option.position * this.option.widthSlide}%)`
            console.log(this.option.position * this.option.widthSlide);
            
        }
        
    }

    nextSlider() {
        if(this.infinity || this.option.position < this.slidesItem.length - this.slidesToShow)
            ++this.option.position;
            console.log(this.option.position);
            if (this.option.position > this.slidesItem.length - this.slidesToShow) {
                this.option.position = 0;
            }
           
            this.item.style.transform = ` translateX(-${this.option.position * this.option.widthSlide}%)`
            console.log(this.option.position * this.option.widthSlide);
            
            
    }

    CaruoselSliderTouch() {
        this.item.addEventListener('click', this.nextSlider.bind(this));
    }
}