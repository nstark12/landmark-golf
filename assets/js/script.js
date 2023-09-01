// Color changing
document.addEventListener("touchstart", function() {}, true);
$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var productColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.prod-img img[data-image = ' + productColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

// cookie popup
// const cookieBox = document.querySelector(".cookiewrapper"),
// 			acceptBtn = cookieBox.querySelector("button");
// 			acceptBtn.onclick = ()=>{
// 			  //setting cookie for 1 month, after one month it'll be expired automatically
// 			  document.cookie = "CookieBy=CodingNepal; max-age="+60*60*24*30;
// 			  if(document.cookie){ //if cookie is set
// 				cookieBox.classList.add("hide"); //hide cookie box
// 			  }else{ //if cookie not set then alert an error
// 				alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
// 			  }
// 			}
// 			let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
// 			//if cookie is set then hide the cookie box else show it
// 			checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");

// customer testimonial slider
const carslider = document.querySelector(".carslider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");

var sectionIndex = 0;

document.querySelectorAll(".controls li").forEach(function(indicator, ind){
	indicator.addEventListener("click", function(){
		sectionIndex = ind;
		document.querySelector(".controls .selected").classList.remove("selected");
		indicator.classList.add("selected");
		carslider.style.transform = "translate(" + (sectionIndex) * -25 + "%)";
	})
})

leftArrow.addEventListener("click",function(){
	sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
	document.querySelector(".controls .selected").classList.remove("selected");
	indicatorParents.children[sectionIndex].classList.add("selected");
	carslider.style.transform = "translate(" + (sectionIndex) * -25 + "%)";
});

rightArrow.addEventListener("click",function(){
	sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
	document.querySelector(".controls .selected").classList.remove("selected");
	indicatorParents.children[sectionIndex].classList.add("selected");
	carslider.style.transform = "translate(" + (sectionIndex) * -25 + "%)";
});


