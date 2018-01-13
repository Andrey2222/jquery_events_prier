
$(document).ready(function(){
	$("#show").click(function(){
		var non1 = $(".non1")
		var non2 = $(".non2")
		var non3 = $(".non3")
		var i = 0;
		var k = 0;
		var y = 0;
		var n = 0;
		setInterval(function() {
			if (i < 468){
				$(".ball").css("top", i)
				$(".ball").css("left", 623)
			}else if ( i > 468 && 800 > i){
				$(".ball").css("top", 468 - k)
				$(".ball").css("left", 623)
				non1.removeClass("non1");
				k++;
			}else if (i > 800 && 1000 > i){
				$(".ball").css("top", 136)
				$(".ball").css("left", 623 + y)
				non2.removeClass("non2");
				y++;
			}else if (i > 1000 && 1400 > i){
				$(".ball").css("top", 136)
				$(".ball").css("left", 838 - n)
				non3.removeClass("non3");
				n++;
			}else if(i == 1401){
				i = 0;
				 k = 0;
				 y = 0;
				 n = 0;
			}
			i++;
			// console.log(i);
		},20);
	});
});

