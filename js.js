const apiKey =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

function getWeather() {
  const city = document.getElementById("city").value.trim();

  if (!city) {
    alert("Bitte gib eine Stadt ein.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Stadt nicht gefunden");
      }
      return response.json();
    })
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      document.getElementById(
        "weather-info"
      ).innerHTML = `<p style="color: red;">${error.message}</p>`;
    });
}

function displayWeather(data) {
  const weatherContainer = document.getElementById("weather-info");
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  weatherContainer.innerHTML = `
       ${icon}${description}
            ${temperature}
            ${description}
        
    `;
}
