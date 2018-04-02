$(document).ready(function () {

	var clix = [0, 0, 0, 0];

	$('#head').click(function () {
		moveMe(0, this);
	}); // end click function

	$('#eyes').click(function () {
		moveMe(1, this);
	}); // end click function

	$('#nose').click(function () {
		moveMe(2, this);
	}); // end click function

	$('#mouth').click(function () {
		moveMe(3, this);
	}); // end click function

	function moveMe(i, obj) {
		if (clix[i] < 9) {
			$(obj).animate({
				left: "-=367px"
			}, 500);
			clix[i] = clix[i] + 1;
		} else {
			clix[i] = 0;
			$(obj).animate({
				left: '0px'
			}, 500);
		}
	}




	// Flash light


	goLightning();
	window.onblur = stopLightning;
	window.onfocus = goLightning;
	var int1, int2, int3;

	function goLightning() {
		int1 = setInterval(function () {
				lightning_one();
			},
			4000);
		int2 = setInterval(function () {
				lightning_two();
			},
			5000);
		int3 = setInterval(function () {
				lightning_three();
			},
			7000);
	}

	function stopLightning() {
		window.clearInterval(int1);
		window.clearInterval(int2);
		window.clearInterval(int3);
	}

	function lightning_one() {
		$("#container #lightning1").fadeIn(250).fadeOut(250);
	};

	function lightning_two() {
		$("#container #lightning2").fadeIn(250).fadeOut(250);
	};

	function lightning_three() {
		$("#container #lightning3").fadeIn(250).fadeOut(250);
	};




});