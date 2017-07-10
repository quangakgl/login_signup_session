// khai bao du lieu list - product

var goi1= {
	title: 'Hộp quà Thái Hòa',
	description: 'Thanh lịch, cổ điển',
	img: 'thaihoa.jpg'
};
var goi2 = {
	title: 'Hộp quà Phát Lộc',
	description: 'Hiện đại, độc đáo',
	img: 'phatloc.jpg'
};

var goi3 = {
	title: 'Hộp quà Bình An',
	description: 'Chân thành, ý nghĩa',
	img: "binhan.jpg"
};

var goi4 = {
	title: 'Hộp quà Phú Quý',
	description: 'Tinh tế, sang trọng',
	img: 'phuquy.jpg'
};

var goi5 = {
	title: 'Hộp quà Phật độ',
	description: 'Cổ điển, sang trọng',
	img: 'traphatdo.jpg'
};

var goi = [goi1,goi2,goi3,goi4,goi5,goi5,goi4,goi3,goi2,goi1];


// Show product in list-product

function changeListProduct (nameProduct) {
	$('.noibat .title ul li a').removeClass('active');
	$(nameProduct).addClass('active');
	var idProduct = $(nameProduct).attr('id');
	switch(idProduct) {
		case 'goiquatang':
		$('.breadcrumb .active-breadcrumb').text('Gói quà tặng')
		break;
		case 'che':
		$('.breadcrumb .active-breadcrumb').text('Chè')
		break;
		case 'omai':
		$('.breadcrumb .active-breadcrumb').text('Ô Mai')
		break;
		case 'keo':
		$('.breadcrumb .active-breadcrumb').text('Kẹo')
		break;
	}
	$('.noibat .special').remove();
	for (var i = 0; i < goi.length; i++) {
		if (i%5 == 0) {
			var addProduct = '<div class="col-xs-12 col-sm-4 col-md-3 col-lg-2 col-lg-offset-1 special">';
			addProduct += '<div class="list"><div class="item"><div class="image"><img src="img/' + goi[i].img + '">';
			addProduct += '<div class="image-overlay"><a href="product-detail.html"><span>Xem Chi Tiết</span></a></div></div>';
			addProduct += '<div class="description"><a href="product-detail.html"><h3>' + goi[i].title + '</h3></a>';
			addProduct += '<p>'+ goi[i].description +'</p><span><a href="#"></a></span></div></div></div></div>';
			$('.noibat .row #list-product').append(addProduct);
		} else{
			var addProduct = '<div class="col-xs-12 col-sm-4 col-md-3 col-lg-2 special">';
			addProduct += '<div class="list"><div class="item"><div class="image"><img src="img/' + goi[i].img + '">';
			addProduct += '<div class="image-overlay"><a href="product-detail.html"><span>Xem Chi Tiết</span></a></div></div>';
			addProduct += '<div class="description"><a href="product-detail.html"><h3>' + goi[i].title + '</h3></a>';
			addProduct += '<p>'+ goi[i].description +'</p><span><a href="#"></a></span></div></div></div></div>';
			$('.noibat .row #list-product').append(addProduct);
		};
	};
}

 function showMenuMb() {
 	$(this).on('click', function(){
 		$('#mySidenav').css('width', '200px');
 		$('#mySidenav').css('transition', 'all 2s');
 	})
 }


$(document).ready(function() {	

	// wow js 

	new WOW().init();


	// show/hide mobile navbar

	$('.navbar-toggle').on('click', function(){
		$('li.dropdown').children('ul').removeClass('dropdown-show');
	});


	$('li.dropdown').on('click', function() {
		if ($(this).children('ul').hasClass('dropdown-show')) {
			$(this).children('ul').removeClass("dropdown-show");
		} else{
			$('li.dropdown').children('ul').removeClass('dropdown-show');
			$(this).children('ul').addClass('dropdown-show');
		};
	});

	//control carousel
	
	$("#myBtn").click(function(){
		$("#bs-carousel").carousel("prev");
	});
	$("#myBtn2").click(function(){
		$("#bs-carousel").carousel("next");
	});


	// config datepicker

	$( function() {
		$( "#datepicker" ).datepicker({
			changeMonth: true,
			changeYear: true,
			showAnim: "fold",
			dateFormat: "dd-mm-yy"
		});
	} );

	// config back to top

	var offset = 300;

	//hide or show the "back to top" link
	$(window).scroll(function(){
		if ($(this).scrollTop() > offset) {
			$('#btn-to-top').css('display', 'block');
		} else{
			$('#btn-to-top').css('display', 'none');
		};
	});

	$('#btn-to-top').click(function(){
		$('html,body').animate({
			scrollTop: 0
		}, 1000);
	});


	// show find-field


	$('.find-laptop').on('click', function(){
		$('.find-laptop-overlay').css('display', 'block');
		$('#timkiem').css('display', 'block');
		$('#timkiem').trigger( "focus" );
	});


	$('#timkiem').focusout(function(){
		$('.find-laptop-overlay').css("display", 'none');
		$('#timkiem').css('display', 'none');
	});

	$('#timkiem').keypress(function(event) {
		if (event.which == 13) {
			$('.find-laptop-overlay').css("display", 'none');
		}
	});

	$('.find-moblie').on('click', function(){
		$('.find-field-mobile').css('display', 'block');
		$('#timkiem-mobile').trigger( "focus" );
	});

	$('#timkiem-mobile').focusout(function(){
		$('.find-field-mobile').css('display', 'none');
	});

});








