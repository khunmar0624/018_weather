$(function () {
    $("#getWeather").click(function (e) {
        e.preventDefault();
        $("#forecastbox").empty();
        var city = $("#city").val();
        var d = new Date();
        var date = d.toDateString();       
        var urlApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ca44bdc8f531754566a509754e2b141c";
        $.get(urlApi, function (data) {
            var weatherP = data.weather[0].main;
           
            if (weatherP == "Clouds") {
                var weatherShow = "clouds.gif";
            }
            if (weatherP == "Rain") {
                var weatherShow = "showerrain.gif";
            }
            if (weatherP == "Clear") {
                var weatherShow = "clears.gif";
            }
            if (weatherP == "Thunderstorm") {
                var weatherShow = "thunderstorms.gif";
            }
            if (weatherP == "Mist") {
                var weatherShow = "mist.gif";
            }
            console.log(data);
            var row1 = "<h4 class = 'fontH'><table ><tr><td><img id = 'pics'class = 'font' src='" + weatherShow + 
            "' alt=''></td><center>" + data.weather[0].description + "</center></table>"+"<img id = 'pic' src='location1.png' alt=''><b><big>" + city + "</big></td><td><h4><img id = 'pic' src='date1.png' alt=''><b>" + date + "</h4></td></tr></table>"+
            "<table><tr><td><img id = 'pic' src='Celsius1.png' alt=''></td><td>" + ((data.main.temp) / 10).toFixed(2) + 
            " °C</td></tr>" + "<tr><td><img  id = 'pic' src='Pressure1.png' alt=''></td><td>" + data.main.pressure + 
            " hPa</td></tr>" + "<tr><td><img  id = 'pic' src='humidity1.png' alt=''></td><td>" + data.main.humidity + "%";
            
            var row2 = "<img id = 'pic' src='location1.png' alt=''><b>" + city + "</td>"

            var row3 = "<table><tr><td><img id = 'pics' class = 'font' src='" + weatherShow + "' alt=''></td><td>" + data.weather[0].description + 
            "<b></td></tr></table>"

            
            $("#forecastbox").append(row1);
           $("#forecastboxs").append(row2);
            
        });
    });
});