const btnWhatsapp = document.getElementById("btn-whatsapp");
		function getLocation() {
  			if (navigator.geolocation) {
    		navigator.geolocation.getCurrentPosition(showPosition);
  			} else { 
			  console.log(error);
			}
		}
		function showPosition(position) {
			const numberSos = '963322199';
			const latitud = position.coords.latitude;
			const longitud = position.coords.longitude;
			const texto = "https://www.google.com/maps/@" + latitud + "," + longitud + ",15z"
			const sendMessage = "https://api.whatsapp.com/send?phone=51"+ numberSos + "&&text=" + texto;
			//console.log(sendMessage)
			window.open(sendMessage);
		}
	btnWhatsapp.addEventListener('click', () => {
		getLocation()
	});