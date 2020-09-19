// Wrap every letter in a span
var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
	/\S/g,
	"<span class='letter'>$&</span>"
);

anime
	.timeline({ loop: false })
	.add({
		targets: ".ml3 .letter",
		opacity: [0, 1],
		easing: "easeInOutQuad",
		duration: 150,
		delay: (el, i) => 50 * (i + 1),
	})
	.add({
		targets: ".ml3",
		opacity: 1,
		duration: 150,
		easing: "easeOutExpo",
		delay: 0,
	});
