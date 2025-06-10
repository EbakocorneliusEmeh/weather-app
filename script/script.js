const url = "https://api.openweathermap.org/data/2.5/weather";
const apikey = "49d94e5d0c5bc8d348ba34f34758332b";

document.addEventListener("DOMContentLoaded", () => {
  weatherFn("Buea");

  const button = document.getElementById("city-input-btn");
  button.addEventListener("click", () => {
    const city = document.getElementById("city-input").value.trim();
    if (city) {
      weatherFn(city);
    }
  });
});

async function weatherFn(cName) {
  const tempUrl = `${url}?q=${encodeURIComponent(
    cName
  )}&appid=${apikey}&units=metric`;
  try {
    const res = await fetch(tempUrl);
    const data = await res.json();
    if (res.ok) {
      weathershowFn(data);
    } else {
      alert("City not found, please try again.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function weathershowFn(data) {
  document.getElementById("city-name").textContent = data.name;
  document.getElementById("date").textContent = moment().format(
    "MMM Do YYYY, h:mm:ss a"
  );
  document.getElementById("temperature").innerHTML = `${data.main.temp}°C`;
  document.getElementById("description").textContent =
    data.weather[0].description;
  document.getElementById(
    "wind-speed"
  ).innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
  document.getElementById(
    "weather-icon"
  ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  const weatherInfo = document.getElementById("weather-info");
  weatherInfo.style.display = "block";
  weatherInfo.style.opacity = 0;
  setTimeout(() => (weatherInfo.style.opacity = 1), 50);
}

