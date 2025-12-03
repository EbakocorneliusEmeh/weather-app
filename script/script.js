// const url = "https://api.openweathermap.org/data/2.5/weather";
// const apikey = "49d94e5d0c5bc8d348ba34f34758332b";

// document.addEventListener("DOMContentLoaded", () => {
//   weatherFn("Buea");

//   const button = document.getElementById("city-input-btn");
//   button.addEventListener("click", () => {
//     const city = document.getElementById("city-input").value.trim();
//     if (city) {
//       weatherFn(city);
//     }
//   });
// });

// async function weatherFn(cName) {
//   const tempUrl = `${url}?q=${encodeURIComponent(
//     cName
//   )}&appid=${apikey}&units=metric`;

//   try {
//     const res = await fetch(tempUrl);
//     const data = await res.json();

//     if (res.ok) {
//       weathershowFn(data);
//     } else {
//       alert("City not found, please try again.");
//     }
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// }

// function weathershowFn(data) {
//   document.getElementById("city-name").textContent = data.name;
//   document.getElementById("temperature").innerHTML = `${data.main.temp}°C`;
//   document.getElementById("description").textContent =
//     data.weather[0].description;
//   document.getElementById(
//     "wind-speed"
//   ).innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
//   document.getElementById(
//     "weather-icon"
//   ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

//   const weatherInfo = document.getElementById("weather-info");
//   weatherInfo.style.display = "block";
//   weatherInfo.style.opacity = "0";

//   setTimeout(() => {
//     weatherInfo.style.opacity = "1";
//   }, 50);

//   updateDate();
//   clearInterval(window.dateInterval);
//   window.dateInterval = setInterval(updateDate, 1000);
// }

// function updateDate() {
//   const now = new Date();
//   const dateStr = now.toLocaleString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   });

//   document.getElementById("date").textContent = dateStr;
// }


const url = "https://api.openweathermap.org/data/2.5/weather";
const apikey = "49d94e5d0c5bc8d348ba34f34758332b";

document.addEventListener("DOMContentLoaded", () => {
  weatherFn("Buea");

  const button = document.getElementById("city-input-btn");
  button.addEventListener("click", () => {
    const cityInput = document.getElementById("city-input");
    const city = cityInput.value.trim();

    // ERROR HANDLER: input cannot be empty
    if (!city) {
      cityInput.style.border = "2px solid red";
      alert("Please enter a city name before searching.");
      return;
    }

    // Reset border when input is valid
    cityInput.style.border = "1px solid #ccc";

    weatherFn(city);
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
  document.getElementById("temperature").innerHTML = `${data.main.temp}°C`;
  document.getElementById("description").textContent =
    data.weather[0].description;
  document.getElementById(
    "wind-speed"
  ).innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
  document.getElementById(
    "weather-icon"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  const weatherInfo = document.getElementById("weather-info");
  weatherInfo.style.display = "block";
  weatherInfo.style.opacity = "0";

  setTimeout(() => {
    weatherInfo.style.opacity = "1";
  }, 50);

  updateDate();
  clearInterval(window.dateInterval);
  window.dateInterval = setInterval(updateDate, 1000);
}

function updateDate() {
  const now = new Date();
  const dateStr = now.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  document.getElementById("date").textContent = dateStr;
}
