(()=>{class t{constructor(t,e,i,s,r,n,a=!0,o=!1){this.wrapper=t,this.slider=document.querySelector(e),this.sliderItems=document.querySelectorAll(i),this.nextBtn=document.querySelector(s),this.prevBtn=document.querySelector(r),this.count=this.sliderItems.length,this.currentNumber=0,this.translatePag=o,this.hasPag=!0,this.nextSlide=this.nextSlide.bind(this),this.prevSlide=this.prevSlide.bind(this),this.rotateToSlide=this.rotateToSlide.bind(this),""!=n?(this.paginationWrapper=document.querySelector(n),a&&(o?this.createImagePagination():this.insertPagination()),this.paginationItems=document.querySelectorAll(`${this.wrapper} .pagination-item`),this.addListenersPag()):(this.hasPag=!1,this.setCount(4)),this.addListenersBtn(),this.translateSlider(0)}setCount(t){this.count=Math.ceil(this.sliderItems.length/t),this.translateSlider(0),this.currentNumber=0}insertPagination(){this.paginationWrapper.innerHTML="";for(let t=0;t<this.count;t++){const e=`<div data-slide="${t}" class="pagination-item">\n              </div>`;this.paginationWrapper.insertAdjacentHTML("beforeend",e)}this.paginationWrapper.firstChild.classList.add("_active")}createImagePagination(){this.paginationWrapper.innerHTML="";for(let t=0;t<this.count;t++){const e=this.sliderItems[t].querySelector("img");let i;i=null!=e?`<div data-slide="${t}" class="pagination-item">\n            ${e.outerHTML}</div>`:`<div data-slide="${t}" class="pagination-item"></div>`,this.paginationWrapper.insertAdjacentHTML("beforeend",i)}this.paginationWrapper.firstChild.classList.add("_active")}addListenersBtn(){this.nextBtn.addEventListener("click",this.nextSlide),this.prevBtn.addEventListener("click",this.prevSlide)}addListenersPag(){for(let t=0;t<this.paginationItems.length;t++)this.paginationItems[t].addEventListener("click",this.rotateToSlide)}nextSlide(){if(this.currentNumber<this.count-1){const t=++this.currentNumber;this.translateSlider(t),this.hasPag&&this.colorPag(t)}}prevSlide(){if(this.currentNumber>0){const t=--this.currentNumber;this.translateSlider(t),this.hasPag&&this.colorPag(t)}}rotateToSlide(t){const e=t.target.dataset.slide;this.hasPag&&this.colorPag(e),this.translateSlider(e),this.currentNumber=e}colorPag(t){const e=document.querySelector(`${this.wrapper} .pagination-item[data-slide="${t}"]`);e.parentElement.querySelector("._active").classList.remove("_active"),e.classList.add("_active")}translateSlider(t){const e=-100*t;if(this.translatePag){let i=-this.paginationItems[0].offsetWidth*t;0!=e&&(i-=11*t),this.paginationWrapper.style.transform=`translate(${i}px,0px)`}this.slider.style.transform=`translate(${e}%,0px)`}touchStart(t){this.startPosition=t}moveSlider(t){if(this.startPosition>t){if(this.startPosition-t>50)return this.nextSlide(),1}else if(t-this.startPosition>50)return this.prevSlide(),1}}const e=new t(".main .slider",".main .slider__body",".main .slider__item",".main .arrow-right",".main .arrow-left",".main .slider__pagination"),i=document.querySelector(".main .slider");i.ontouchstart=t=>{e.touchStart(t.touches[0].clientX),i.addEventListener("touchmove",s)};const s=t=>{t.preventDefault();const r=t.touches[0].clientX;e.moveSlider(r)&&i.removeEventListener("touchmove",s)},r=(new t(".features .slider",".features .slider__body",".features .slider__item",".features .arrow-right",".features .arrow-left",".features .slider__pagination",!1),new t(".about .slider",".about .slider__body",".about .slider__item",".about .arrow-right",".about .arrow-left",".about .slider__pagination",!0,!0),new t(".registration .slider",".registration .slider__body",".registration .slider__item",".registration .arrow-right",".registration .arrow-left","",!1));function n(){window.matchMedia("(max-width: 767px)").matches?r.setCount(2):r.setCount(4)}window.addEventListener("resize",n),n();const a=document.querySelectorAll(".circle");for(let t=0;t<a.length;t++)a[t].addEventListener("click",o);function o(t){const e=t.pageX,i=t.pageY,s=t.target.parentElement.id,r=document.querySelector(`.features-card[data-circle="${s}"]`);if(null!=r){let t=e-r.clientWidth/2,s=i-r.clientHeight-30;t<=0&&(t=0),s<=0&&(s=0),r.style.top=s+"px",r.style.left=t+"px",r.classList.toggle("_open")}}window.addEventListener("click",(function(t){if(!t.target.closest("div").classList.contains("features__picture")){const t=document.querySelector(".features-card._open");null!=t&&t.classList.remove("_open")}}));const l=document.querySelectorAll(".image-slide"),d=document.querySelector(".modal"),c=document.querySelector(".modal__body");document.querySelector(".modal .close-btn").addEventListener("click",(function(t){d.classList.remove("_open"),document.body.classList.remove("_block")}));for(let t=0;t<l.length;t++)l[t].addEventListener("click",h);function h(t){const e=t.target.innerHTML;c.innerHTML=e,d.classList.add("_open"),document.body.classList.add("_block")}})();