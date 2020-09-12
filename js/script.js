// $(document).ready(function(){
// 	$('#hamburger').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });


// function initMap() {
// //   Latitude: 51.5214 / 51°31'17"N

// // Longitude: -0.6461 / 0°38'46"W
//   var uluru = {lat:51.5214 /, lng: -0.6461};
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 4, center: uluru});
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

const check = document.querySelector('.counter');


const run = () => {

  if (elementInViewport(check)) {
    // counter
const counters = document.querySelectorAll('.counter');
const speed = 2; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

  } else {
    console.log('victoria can not go home :)')
  }

}


window.addEventListener('scroll', run);




function menu() {
  let links = document.getElementsByClassName("nav-links")[0];
  links.classList.toggle("toggle");
}
// function burg(){
//   let links = document.getElementsByClassName("links")[0];
//   links.classList.toggle("toggle")
// }

