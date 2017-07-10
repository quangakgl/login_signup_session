function addCommas(nStr) {
	nStr += '';
	var x = nStr.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + '.' + '$2');
	}
	return x1 + x2;
}

function totalMoney(){
	var value1 = $('input[data-idsub="1"]').val();
	var price1 = $('input[data-idsub="1"]').attr('data-price');
	var total1 = value1 * price1;

	var total = total1;

	$('#total-money').text(addCommas(total));
}


function plus(p){
	var dataID = $(p).data('idsub');
	var value = $('input[data-idsub='+dataID+']').val();
	$('input[data-idsub='+dataID+']').val(+value+1);
	totalMoney();
}
function minus(m) {
	var dataID = $(m).data('idsub');
	var value = $('input[data-idsub='+dataID+']').val();
	if (value > 0) {
		$('input[data-idsub='+dataID+']').val(+value-1);
	}
	totalMoney();
}


$("input").on('change', function(){
	totalMoney();
})


function addCart(){
	Lobibox.notify('success', {
		size: 'mini',
		rounded: true,
		delay: 1000,
		msg: 'Sản phẩm đã được thêm vào giỏ hàng thành công!'
	});
}

// target element
$(".my-rating").starRating({
	initialRating: 4.5,
	disableAfterRate: false,
});

$(".fa-times-circle-o").click(function(){
    $(".background-vani").css("display", "none");
});








