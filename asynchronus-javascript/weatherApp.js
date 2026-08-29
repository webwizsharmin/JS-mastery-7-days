// Define API key and target city
const apiKey = "YOUR_API_KEY_HERE";
const city = "London";

async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    // 1. Send the network request
    const response = await fetch(url);

    // 2. Check if the HTTP status code is successful(e.g., 200 ok)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 3. Parse the incoming stream into a readable JSON object
    const data = await response.json();

    if (data.cod !== 200) {
      throw new Error(`API error: ${data.message}`);
    }

    // 4.Extract and display specific weather parameters
    console.log(`city: ${data.name}`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Weather: ${data.weather[0].description}`);
  } catch (error) {
    // Handle network errors or invalid API responses safely
    console.error("Failed to retrieve weather data:", error);
  }
}

// Execute the function
fetchWeather();
