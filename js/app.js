console.log('hello');


//la date 
moment.locale('fr');
$("#date").text(moment().format("LL"));
//requete ajax en jquery et api meteo 
var ville = $("#ville").val();

function meteo(ville) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q="+ville+"&lang=fr&units=metric&appid=a4649cf0588a5801be9e28bed643cabc",
        dataType: "json",
        success: function(data) {
            $("#temperature").text(parseInt(data.main.temp) + "°");
            $("#TempMax").text(data.main.temp_max);
            $("#tempMin").text(data.main.temp_min);
            $("#atmospherique").text(data.main.pressure + "hpa");
            $("#Humidite").text(data.main.humidity);
            $("#vitesseduvent").text(data.wind.speed + "km/h");
            $("#longitude").text(data.coord.lon);
            $("#latitude").text(data.coord.lat);
            $("#map").html("<iframe  src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCzz2744qgwzVxQHsY6Krfy6nlHzi6r8-4&q="+ville+"&zoom=12&maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>");

        }
    })
}



$(document).ready(function() {
	//je valide pour avoir toujour la meteo de Pamiers a chaque fois que je me connecte
    meteo(ville);
    //je valide l'envoi de la nouvelle ville 
    $('#valider').click(function() {
        ville = $("#ville").val();
        meteo(ville);

    });
//valider pour pouvoir la touche valider 
    $("#ville").keypress(function(e){
    	if ( e.keyCode == 13 ){
    		ville = $("#ville").val();
        meteo(ville);

    	}
    })


});


