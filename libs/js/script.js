	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#llat').val(),
				lng: $('#llng').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#geo1').html(result['data']['distance']);
					$('#geo2').html(result['data']['geonameId']);
					$('#geo3').html(result['data']['name']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log('hey');
			}
		}); 
	
	});
	$('#btnRun1').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo1.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lllat').val(),
				lng: $('#lllng').val()
			},
			success: function(result) {
	
				console.log(JSON.stringify(result));
	
				if (result.status.name == "ok") {
	
					$('#geo4').html(result['data']['city']);
					$('#geo5').html(result['data']['countryCode']);
					$('#geo6').html(result['data']['name']);
	
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log('hey');
			}
		}); 
	
	});
	$('#btnRun2').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo2.php",
			type: 'POST',
			dataType: 'json',
			data: {
				geonameId: $('#ggid').val()
			},
			success: function(result) {
	
				console.log(JSON.stringify(result));
	
				if (result.status.name == "ok") {
	
					$('#geo7').html(result['data'][0]['adminCode1']);
					$('#geo8').html(result['data'][0]['lng']);
					$('#geo9').html(result['data'][0]['countryId']);
	
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log('hey');
			}
		}); 
	
	});
