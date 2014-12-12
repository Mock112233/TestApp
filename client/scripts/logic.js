$(document).ready(function(){
	var d = new Date();

	$('#check-in').val(convertDateToString(d));
	$('#check-out').val(convertDateToString(d));

	$('#check-in').datepicker({
		changeMonth: true,
		changeYear: true,
		minDate: new Date(),
		showOn: 'both',
        buttonImage: 'img/bg.png',
        buttonImageOnly: true,
        onClose: function() {
            $("#check-out").datepicker(
                    "change",
                    { minDate: getMinDate()}
            );

            var newDate = convertDateToString(getMinDate());
             $("#check-out").val(newDate)
        }
	});

	$('#check-out').datepicker({
		changeMonth: true,
		changeYear: true,
		minDate: getMinDate(),
		showOn: 'both',
        buttonImage: 'img/bg.png',
        buttonImageOnly: true,
	});

	function convertDateToString(d){
		var curr_date = d.getDate();
		var curr_month = d.getMonth()+1;
		var curr_year = d.getFullYear();
		return curr_month + '/' + curr_date + '/' + curr_year;
	}

	function getMinDate(){
		var date = $('#check-in').val();

		if (date) {
			var dateParts =date.split('/');
			return new Date(dateParts[2],dateParts[0]-1,dateParts[1]);
		}else{
			return new Date();
		}
	}
})