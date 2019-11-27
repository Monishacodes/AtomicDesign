function slider() {
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 20000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
		]
	});
};

function burgermenu() {
	$('.navbar-menu li:last-child').click(function () {
		//console.log('nsakjdfn');
		$('.icon').toggleClass('rotate');
		$('.navbar-menu').toggleClass('active-menu');
		$('body').toggleClass('overflow-hide');
	})
};
$(window).bind('scroll', function () {
	if ($(window).scrollTop() > 50) {
		$('.navbar').addClass('fixed');
	} 
	else {
		$('.navbar').removeClass('fixed');
	}
});

function scrollit()
{
	$(window).scroll(function () {
		console.log($(window).scrollTop());
		if($(window).scrollTop() >= 1200)
		{
			$('.contact-heading h2').addClass('letteranimation');
		}
		else {
			$('.contact-heading h2').removeClass('letteranimation');
		}
	});
}


var width = jQuery(window).width();
function getScrollBar(){ 
	var outer;
    var widthNoScroll;
    var inner;
    var widthWithScroll;


    outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);
    widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = 'scroll';
    // add innerdiv
    inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);
    widthWithScroll = inner.offsetWidth;
    // remove divs
    outer.parentNode.removeChild(outer);
    return widthNoScroll - widthWithScroll;
}

function megamenu() {
	$('.drop').hover(function(){
		$('.dropdown-content').css("display", "block");
		jQuery('html').css({ 'margin-right': getScrollBar, overflow: 'hidden' });
	//	$('body').addClass('overflow-hide');
		
	},function(){
		jQuery('html').css({ 'margin-right': '', overflow: '' });
		$('.dropdown-content').css("display", "none");
		//$('body').removeClass('overflow-hide');
	}
)};


//search filter

function search () {
	$("#search").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$(".article , .article h2").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
}

$(document).ready(function() { 	
	console.log($(window).scrollTop()); 
	megamenu();
	slider();
	burgermenu();
	getScrollBar();
	search();
	scrollit();
}); 