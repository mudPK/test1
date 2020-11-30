const btn1 = document.querySelector('.fa-bars');
const btn2 = document.querySelector('.SEAR');
const header = document.querySelector('.header');
const search = document.querySelector('#searchingBar');

btn1.addEventListener("click",function(){
	header.classList.toggle("dis");
});

btn2.addEventListener("click",function(){
	search.classList.toggle("searchSHOW");
});