const url = 'https://api.openweathermap.org/data/2.5/weather';
const apikey = 
    '49d94e5d0c5bc8d348ba34f34758332b';

$(document).ready(function() {
    weatherFn('Buea');
    
});

async function weatherFn(cName) {
    const temp = `${url}?q=${cName}&appid=${apikey}&units=metric`;
    try{
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weathershowFn(data);
        } else {
            alert('city not found, please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function weathershowFn(data) {
    $('#city-name').text(data.name);
    $('#data').text(moment().
     format('MMM Do YYYY, h:mm:ss a'));
    $('#temperature').
    html(`${data.main.temp}°C`);
    $('#description').
    text(data.weather[0].description);
    $('#wind-speed').
    html(`wind speed: ${data.wind.speed} m/s`);
    $('#weather-icon').attr('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    $('#weather-info').fadeIn();
}