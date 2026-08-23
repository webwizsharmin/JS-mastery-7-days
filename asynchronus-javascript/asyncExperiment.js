// Modern way to fetch data
async function fetchData() {
  try {
    // 1.Send the network request
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // check if the HTTP Status code is successful (200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 3. Parse the stream data into a JSON Object
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // 4. Catch network failures or parsing error
    console.error("Failed to fetch data:", error);
  }
}

fetchData();
